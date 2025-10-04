import { useState, useMemo } from "react";
import { Building2, TrendingUp } from "lucide-react";
import { CompanyTable } from "@/components/CompanyTable";
import { CompanyFilters } from "@/components/CompanyFilters";
import { CompanyPagination } from "@/components/CompanyPagination";
import { mockCompanies, industries, locations } from "@/data/mockCompanies";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isLoading] = useState(false);

  // Filter companies
  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter((company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesIndustry =
        selectedIndustry === "All Industries" ||
        company.industry === selectedIndustry;
      const matchesLocation =
        selectedLocation === "All Locations" ||
        company.location === selectedLocation;

      return matchesSearch && matchesIndustry && matchesLocation;
    });
  }, [searchTerm, selectedIndustry, selectedLocation]);

  // Pagination
  const totalPages = Math.ceil(filteredCompanies.length / pageSize);
  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredCompanies.slice(startIndex, startIndex + pageSize);
  }, [filteredCompanies, currentPage, pageSize]);

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

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
    setCurrentPage(1);
  };

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
                  Explore {mockCompanies.length} leading companies
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
                onPageSizeChange={handlePageSizeChange}
                totalItems={filteredCompanies.length}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card/50 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          Company Directory © 2025 • Built with React & TypeScript
        </div>
      </footer>
    </div>
  );
}

export default App;
