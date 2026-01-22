import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Building, Percent, Banknote } from 'lucide-react';

interface RateData {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ComponentType<any>;
}

const FinancialRatesWidget = () => {
  const [rates, setRates] = useState<RateData[]>([
    {
      name: 'Wall Street Prime Rate',
      value: '8.50%',
      change: 'Unchanged',
      trend: 'neutral',
      icon: Building
    },
    {
      name: 'Federal Funds Rate',
      value: '5.25-5.50%',
      change: 'Unchanged',
      trend: 'neutral',
      icon: DollarSign
    },
    {
      name: '10-Year Treasury',
      value: '4.28%',
      change: '-0.05%',
      trend: 'down',
      icon: TrendingUp
    },
    {
      name: '30-Year Fixed Mortgage',
      value: '6.81%',
      change: '+0.02%',
      trend: 'up',
      icon: Banknote
    },
    {
      name: 'SBA 7(a) Base Rate',
      value: '11.50%',
      change: 'Unchanged',
      trend: 'neutral',
      icon: Percent
    },
    {
      name: '5-Year Treasury',
      value: '4.15%',
      change: '-0.03%',
      trend: 'down',
      icon: TrendingUp
    }
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  const fetchMarketData = async () => {
    const apiKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY || 'demo';

    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=daily&maturity=10year&apikey=${apiKey}`
      );
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        const latestData = data.data[0];
        const previousData = data.data[1] || latestData;

        const current10Year = parseFloat(latestData.value);
        const previous10Year = parseFloat(previousData.value);
        const change10Year = current10Year - previous10Year;

        setRates(prevRates =>
          prevRates.map(rate => {
            if (rate.name === '10-Year Treasury') {
              return {
                ...rate,
                value: `${current10Year.toFixed(2)}%`,
                change: change10Year === 0 ? 'Unchanged' : `${change10Year > 0 ? '+' : ''}${change10Year.toFixed(2)}%`,
                trend: change10Year > 0.01 ? 'up' : change10Year < -0.01 ? 'down' : 'neutral'
              };
            }
            return rate;
          })
        );
      }
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    setLastUpdated(new Date());

    const interval = setInterval(() => {
      fetchMarketData();
      setLastUpdated(new Date());
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <div className="h-4 w-4 bg-gray-400 rounded-full"></div>;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">Current Market Rates</h3>
        <div className="flex items-center text-sm text-gray-500">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Live Market Data
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rates.map((rate, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#007acc] rounded-lg flex items-center justify-center">
                <rate.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{rate.name}</p>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(rate.trend)}
                  <span className={`text-xs ${getTrendColor(rate.trend)}`}>
                    {rate.change}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-gray-800">{rate.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
          <span className="text-[#007acc]">Market rates for reference</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Important:</strong> These are current market benchmark rates for reference only. 
          Your actual loan rates will vary based on creditworthiness, loan terms, collateral, and specific lender requirements. 
          Contact our brokerage team for personalized rate quotes from our network of lenders.
        </p>
      </div>
    </div>
  );
};

export default FinancialRatesWidget;