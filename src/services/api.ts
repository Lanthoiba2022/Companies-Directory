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

const API_BASE_URL = 'http://localhost:3001';

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

  static async getCompanies(): Promise<Company[]> {
    return this.fetchData<Company[]>('/companies');
  }

  static async getCompanyById(id: string): Promise<Company> {
    return this.fetchData<Company>(`/companies/${id}`);
  }

  static async searchCompanies(query: string): Promise<Company[]> {
    return this.fetchData<Company[]>(`/companies?q=${encodeURIComponent(query)}`);
  }

  static async getCompaniesByIndustry(industry: string): Promise<Company[]> {
    return this.fetchData<Company[]>(`/companies?industry=${encodeURIComponent(industry)}`);
  }

  static async getCompaniesByLocation(location: string): Promise<Company[]> {
    return this.fetchData<Company[]>(`/companies?location=${encodeURIComponent(location)}`);
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
