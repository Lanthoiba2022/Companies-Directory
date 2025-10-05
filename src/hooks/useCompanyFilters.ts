import { useState, useMemo } from 'react';
import type { Company } from '@/services/api';

interface UseCompanyFiltersProps {
  companies: Company[];
}

interface UseCompanyFiltersReturn {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedIndustry: string;
  setSelectedIndustry: (industry: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
  filteredCompanies: Company[];
  resetFilters: () => void;
}

export function useCompanyFilters({ companies }: UseCompanyFiltersProps): UseCompanyFiltersReturn {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesIndustry =
        selectedIndustry === 'All Industries' ||
        company.industry === selectedIndustry;
      const matchesLocation =
        selectedLocation === 'All Locations' ||
        company.location === selectedLocation;

      return matchesSearch && matchesIndustry && matchesLocation;
    });
  }, [companies, searchTerm, selectedIndustry, selectedLocation]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedIndustry('All Industries');
    setSelectedLocation('All Locations');
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedIndustry,
    setSelectedIndustry,
    selectedLocation,
    setSelectedLocation,
    filteredCompanies,
    resetFilters
  };
}
