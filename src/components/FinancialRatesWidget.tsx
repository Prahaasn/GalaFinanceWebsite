import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Building, Percent, Banknote } from 'lucide-react';

interface RateData {
  name: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ComponentType<any>;
  seriesId: string;
}

// FRED API Series IDs for each rate
const FRED_SERIES = {
  prime: 'DPRIME',           // Bank Prime Loan Rate
  fedFunds: 'DFF',           // Effective Federal Funds Rate
  treasury10y: 'DGS10',      // 10-Year Treasury Constant Maturity
  treasury5y: 'DGS5',        // 5-Year Treasury Constant Maturity
  mortgage30y: 'MORTGAGE30US' // 30-Year Fixed Rate Mortgage Average
};

const FinancialRatesWidget = () => {
  const [rates, setRates] = useState<RateData[]>([
    {
      name: 'Wall Street Prime Rate',
      value: '8.50%',
      change: 'Loading...',
      trend: 'neutral',
      icon: Building,
      seriesId: FRED_SERIES.prime
    },
    {
      name: 'Federal Funds Rate',
      value: '5.33%',
      change: 'Loading...',
      trend: 'neutral',
      icon: DollarSign,
      seriesId: FRED_SERIES.fedFunds
    },
    {
      name: '10-Year Treasury',
      value: '4.28%',
      change: 'Loading...',
      trend: 'neutral',
      icon: TrendingUp,
      seriesId: FRED_SERIES.treasury10y
    },
    {
      name: '30-Year Fixed Mortgage',
      value: '6.81%',
      change: 'Loading...',
      trend: 'neutral',
      icon: Banknote,
      seriesId: FRED_SERIES.mortgage30y
    },
    {
      name: 'SBA 7(a) Base Rate',
      value: '11.25%',
      change: 'Loading...',
      trend: 'neutral',
      icon: Percent,
      seriesId: 'SBA_CALCULATED' // Calculated as Prime + 2.75%
    },
    {
      name: '5-Year Treasury',
      value: '4.15%',
      change: 'Loading...',
      trend: 'neutral',
      icon: TrendingUp,
      seriesId: FRED_SERIES.treasury5y
    }
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFredRate = async (seriesId: string): Promise<{ value: number; change: number } | null> => {
    const apiKey = import.meta.env.VITE_FRED_API_KEY || '';

    if (!apiKey) {
      console.warn('FRED API key not configured');
      return null;
    }

    try {
      const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${seriesId}&api_key=${apiKey}&file_type=json&sort_order=desc&limit=5`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`FRED API error: ${response.status}`);
      }

      const data = await response.json();

      if (data.observations && data.observations.length > 0) {
        // Find the latest non-missing value
        let latestValue = null;
        let previousValue = null;

        for (const obs of data.observations) {
          if (obs.value !== '.' && obs.value !== null) {
            if (latestValue === null) {
              latestValue = parseFloat(obs.value);
            } else if (previousValue === null) {
              previousValue = parseFloat(obs.value);
              break;
            }
          }
        }

        if (latestValue !== null) {
          const change = previousValue !== null ? latestValue - previousValue : 0;
          return { value: latestValue, change };
        }
      }
      return null;
    } catch (err) {
      console.error(`Error fetching ${seriesId}:`, err);
      return null;
    }
  };

  const fetchAllRates = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch all rates in parallel
      const [primeData, fedFundsData, treasury10yData, treasury5yData, mortgage30yData] = await Promise.all([
        fetchFredRate(FRED_SERIES.prime),
        fetchFredRate(FRED_SERIES.fedFunds),
        fetchFredRate(FRED_SERIES.treasury10y),
        fetchFredRate(FRED_SERIES.treasury5y),
        fetchFredRate(FRED_SERIES.mortgage30y)
      ]);

      // Calculate SBA 7(a) rate (Prime + 2.75%)
      const sbaRate = primeData ? primeData.value + 2.75 : null;
      const sbaChange = primeData ? primeData.change : 0;

      setRates(prevRates => prevRates.map(rate => {
        let newData: { value: number; change: number } | null = null;

        switch (rate.seriesId) {
          case FRED_SERIES.prime:
            newData = primeData;
            break;
          case FRED_SERIES.fedFunds:
            newData = fedFundsData;
            break;
          case FRED_SERIES.treasury10y:
            newData = treasury10yData;
            break;
          case FRED_SERIES.treasury5y:
            newData = treasury5yData;
            break;
          case FRED_SERIES.mortgage30y:
            newData = mortgage30yData;
            break;
          case 'SBA_CALCULATED':
            if (sbaRate !== null) {
              newData = { value: sbaRate, change: sbaChange };
            }
            break;
        }

        if (newData) {
          const trend: 'up' | 'down' | 'neutral' =
            newData.change > 0.01 ? 'up' :
            newData.change < -0.01 ? 'down' : 'neutral';

          return {
            ...rate,
            value: `${newData.value.toFixed(2)}%`,
            change: newData.change === 0 ? 'Unchanged' : `${newData.change > 0 ? '+' : ''}${newData.change.toFixed(2)}%`,
            trend
          };
        }

        return { ...rate, change: 'Unchanged' };
      }));

      setLastUpdated(new Date());
    } catch (err) {
      console.error('Error fetching market data:', err);
      setError('Unable to fetch live rates');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllRates();

    // Refresh every hour
    const interval = setInterval(() => {
      fetchAllRates();
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
          <div className={`w-2 h-2 ${error ? 'bg-yellow-500' : 'bg-green-500'} rounded-full mr-2 animate-pulse`}></div>
          {error ? 'Cached Data' : 'Live FRED Data'}
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
          <span className="text-[#007acc]">Source: Federal Reserve (FRED)</span>
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Important:</strong> These are current market benchmark rates from the Federal Reserve Economic Data (FRED).
          Your actual loan rates will vary based on creditworthiness, loan terms, collateral, and specific lender requirements.
          Contact our brokerage team for personalized rate quotes from our network of lenders.
        </p>
      </div>
    </div>
  );
};

export default FinancialRatesWidget;
