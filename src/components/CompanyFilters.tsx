import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CompanyFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedIndustry: string;
  onIndustryChange: (value: string) => void;
  selectedLocation: string;
  onLocationChange: (value: string) => void;
  industries: string[];
  locations: string[];
}

export function CompanyFilters({
  searchTerm,
  onSearchChange,
  selectedIndustry,
  onIndustryChange,
  selectedLocation,
  onLocationChange,
  industries,
  locations,
}: CompanyFiltersProps) {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search companies by name..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-11 bg-background"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select value={selectedIndustry} onValueChange={onIndustryChange}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedLocation} onValueChange={onLocationChange}>
          <SelectTrigger className="h-11 bg-background">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
