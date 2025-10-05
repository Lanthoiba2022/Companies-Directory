import { useState } from "react";
import type { Company } from "@/services/api";
import { ArrowUpDown, ExternalLink, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type SortField = "name" | "industry" | "location" | "employees" | "founded" | "revenue";
type SortOrder = "asc" | "desc";

interface CompanyTableProps {
  companies: Company[];
  isLoading?: boolean;
}

export function CompanyTable({ companies, isLoading }: CompanyTableProps) {
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const sortedCompanies = [...companies].sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === "revenue") {
      // Extract numeric values from revenue strings like "$15B - $20B"
      const extractRevenue = (revenue: string) => {
        const match = revenue.match(/\$(\d+(?:\.\d+)?)B/);
        return match ? parseFloat(match[1]) : 0;
      };
      aValue = extractRevenue(aValue as string);
      bValue = extractRevenue(bValue as string);
    } else if (typeof aValue === "string") {
      aValue = aValue.toLowerCase();
      bValue = (bValue as string).toLowerCase();
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="h-16 bg-muted animate-pulse rounded-lg"
          />
        ))}
      </div>
    );
  }

  if (companies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <Building2 className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">No companies found</h3>
        <p className="text-muted-foreground text-center">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="w-[250px] text-center">
              <Button
                variant="ghost"
                onClick={() => handleSort("name")}
                className="h-auto p-0 hover:bg-transparent font-semibold w-full justify-center"
              >
                Company Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">
              <Button
                variant="ghost"
                onClick={() => handleSort("industry")}
                className="h-auto p-0 hover:bg-transparent font-semibold w-full justify-center"
              >
                Industry
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">
              <Button
                variant="ghost"
                onClick={() => handleSort("location")}
                className="h-auto p-0 hover:bg-transparent font-semibold w-full justify-center"
              >
                Location
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">
              <Button
                variant="ghost"
                onClick={() => handleSort("employees")}
                className="h-auto p-0 hover:bg-transparent font-semibold w-full justify-center"
              >
                Employees
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">
              <Button
                variant="ghost"
                onClick={() => handleSort("founded")}
                className="h-auto p-0 hover:bg-transparent font-semibold w-full justify-center"
              >
                Founded
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">
              <Button
                variant="ghost"
                onClick={() => handleSort("revenue")}
                className="h-auto p-0 hover:bg-transparent font-semibold w-full justify-center"
              >
                Revenue
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            </TableHead>
            <TableHead className="text-center">
              <span className="font-semibold">Website</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedCompanies.map((company) => (
            <TableRow
              key={company.id}
              className="hover:bg-muted/30 transition-colors"
            >
              <TableCell className="text-center">
                <div className="flex flex-col items-center space-y-1">
                  <div className="font-semibold text-foreground text-center">
                    {company.name}
                  </div>
                  <div className="text-sm text-muted-foreground line-clamp-1 text-center max-w-[200px]">
                    {company.description}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-primary/10 text-primary">
                  {company.industry}
                </span>
              </TableCell>
              <TableCell className="text-center text-muted-foreground">
                {company.location}
              </TableCell>
              <TableCell className="text-center font-medium">
                {company.employees.toLocaleString()}
              </TableCell>
              <TableCell className="text-center text-muted-foreground">
                {company.founded}
              </TableCell>
              <TableCell className="text-center text-muted-foreground">
                {company.revenue}
              </TableCell>
              <TableCell className="text-center">
                <a
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-hover transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
