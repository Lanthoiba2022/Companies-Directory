import { Building2, TrendingUp, AlertCircle, RefreshCw } from "lucide-react";
import { CompanyTable } from "@/components/CompanyTable";
import { CompanyFilters } from "@/components/CompanyFilters";
import { CompanyPagination } from "@/components/CompanyPagination";
import { useCompanies } from "@/hooks/useCompanies";
import { useCompanyFilters } from "@/hooks/useCompanyFilters";
import { usePagination } from "@/hooks/usePagination";
import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  const { companies, industries, locations, isLoading, error, refetch } = useCompanies();
  
  const {
    searchTerm,
    setSearchTerm,
    selectedIndustry,
    setSelectedIndustry,
    selectedLocation,
    setSelectedLocation,
    filteredCompanies,
    resetFilters
  } = useCompanyFilters({ companies });

  const {
    currentPage,
    setCurrentPage,
    pageSize,
    setPageSize,
    totalPages,
    paginatedCompanies,
    totalItems
  } = usePagination({ companies: filteredCompanies });

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    handleFilterChange();
  };

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    handleFilterChange();
  };

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    handleFilterChange();
  };

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold text-foreground">Failed to load companies</h2>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={refetch} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary via-primary-hover to-accent flex items-center justify-center shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Company Directory
                </h1>
                <p className="text-sm text-muted-foreground">
                  {isLoading ? "Loading companies..." : `Explore ${companies.length} leading companies`}
                </p>
              </div>
            </a>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-success" />
              <span className="text-muted-foreground">
                {filteredCompanies.length} results
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-card rounded-lg p-6 shadow-sm border">
            <CompanyFilters
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              selectedIndustry={selectedIndustry}
              onIndustryChange={handleIndustryChange}
              selectedLocation={selectedLocation}
              onLocationChange={handleLocationChange}
              industries={industries}
              locations={locations}
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="text-sm font-medium text-muted-foreground mb-1">
                Total Companies
              </div>
              <div className="text-3xl font-bold text-foreground">
                {filteredCompanies.length}
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="text-sm font-medium text-muted-foreground mb-1">
                Industries
              </div>
              <div className="text-3xl font-bold text-foreground">
                {new Set(filteredCompanies.map((c) => c.industry)).size}
              </div>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <div className="text-sm font-medium text-muted-foreground mb-1">
                Locations
              </div>
              <div className="text-3xl font-bold text-foreground">
                {new Set(filteredCompanies.map((c) => c.location)).size}
              </div>
            </div>
          </div>

          {/* Table */}
          <CompanyTable companies={paginatedCompanies} isLoading={isLoading} />

          {/* Pagination */}
          {filteredCompanies.length > 0 && (
            <div className="bg-card rounded-lg p-4 shadow-sm border">
              <CompanyPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                pageSize={pageSize}
                onPageSizeChange={setPageSize}
                totalItems={totalItems}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-xs text-muted-foreground">
          Company Directory © 2025 • Built with React & TypeScript
        </div>
      </footer>
    </div>
  );
}

export default App;
