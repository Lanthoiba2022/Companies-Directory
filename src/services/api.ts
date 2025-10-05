export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  employees: number;
  founded: number;
  revenue: string;
  website: string;
  description: string;
}

// Environment-based API configuration
const API_BASE_URL = import.meta.env.DEV 
  ? 'http://localhost:3001' 
  : '/data';

export class ApiService {
  private static async fetchData<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // For production, fetch from static JSON file
  private static async fetchStaticData<T>(): Promise<T> {
    try {
      const response = await fetch(`${API_BASE_URL}/companies.json`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      // Handle both direct array and object with companies property
      const result = Array.isArray(data) ? data : data.companies || data;
      return result as T;
    } catch (error) {
      console.error('Static Data Error:', error);
      throw error;
    }
  }

  static async getCompanies(): Promise<Company[]> {
    if (import.meta.env.DEV) {
      return this.fetchData<Company[]>('/companies');
    } else {
      return this.fetchStaticData<Company[]>();
    }
  }

  static async getCompanyById(id: string): Promise<Company> {
    if (import.meta.env.DEV) {
      return this.fetchData<Company>(`/companies/${id}`);
    } else {
      const companies = await this.fetchStaticData<Company[]>();
      const company = companies.find(c => c.id === id);
      if (!company) {
        throw new Error(`Company with id ${id} not found`);
      }
      return company;
    }
  }

  static async searchCompanies(query: string): Promise<Company[]> {
    if (import.meta.env.DEV) {
      return this.fetchData<Company[]>(`/companies?q=${encodeURIComponent(query)}`);
    } else {
      const companies = await this.fetchStaticData<Company[]>();
      const lowercaseQuery = query.toLowerCase();
      return companies.filter(company => 
        company.name.toLowerCase().includes(lowercaseQuery) ||
        company.industry.toLowerCase().includes(lowercaseQuery) ||
        company.location.toLowerCase().includes(lowercaseQuery) ||
        company.description.toLowerCase().includes(lowercaseQuery)
      );
    }
  }

  static async getCompaniesByIndustry(industry: string): Promise<Company[]> {
    if (import.meta.env.DEV) {
      return this.fetchData<Company[]>(`/companies?industry=${encodeURIComponent(industry)}`);
    } else {
      const companies = await this.fetchStaticData<Company[]>();
      return companies.filter(company => company.industry === industry);
    }
  }

  static async getCompaniesByLocation(location: string): Promise<Company[]> {
    if (import.meta.env.DEV) {
      return this.fetchData<Company[]>(`/companies?location=${encodeURIComponent(location)}`);
    } else {
      const companies = await this.fetchStaticData<Company[]>();
      return companies.filter(company => company.location === location);
    }
  }

  static async getIndustries(): Promise<string[]> {
    const companies = await this.getCompanies();
    const industries = [...new Set(companies.map(company => company.industry))];
    return ['All Industries', ...industries.sort()];
  }

  static async getLocations(): Promise<string[]> {
    const companies = await this.getCompanies();
    const locations = [...new Set(companies.map(company => company.location))];
    return ['All Locations', ...locations.sort()];
  }
}
