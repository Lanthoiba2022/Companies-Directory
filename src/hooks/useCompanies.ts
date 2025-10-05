import { useState, useEffect } from 'react';
import { ApiService, type Company } from '@/services/api';

interface UseCompaniesReturn {
  companies: Company[];
  industries: string[];
  locations: string[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useCompanies(): UseCompaniesReturn {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [industries, setIndustries] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [companiesData, industriesData, locationsData] = await Promise.all([
        ApiService.getCompanies(),
        ApiService.getIndustries(),
        ApiService.getLocations()
      ]);
      
      setCompanies(companiesData);
      setIndustries(industriesData);
      setLocations(locationsData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      console.error('Error fetching companies:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    companies,
    industries,
    locations,
    isLoading,
    error,
    refetch: fetchData
  };
}
