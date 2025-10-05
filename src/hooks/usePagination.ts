import { useState, useMemo } from 'react';
import type { Company } from '@/services/api';

interface UsePaginationProps {
  companies: Company[];
  initialPageSize?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
  totalPages: number;
  paginatedCompanies: Company[];
  totalItems: number;
}

export function usePagination({ 
  companies, 
  initialPageSize = 10 
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.ceil(companies.length / pageSize);
  const totalItems = companies.length;

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return companies.slice(startIndex, startIndex + pageSize);
  }, [companies, currentPage, pageSize]);

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to first page when changing page size
  };

  return {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize: handlePageSizeChange,
    totalPages,
    paginatedCompanies,
    totalItems
  };
}
