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

export const mockCompanies: Company[] = [
  {
    id: "1",
    name: "TechVision Inc",
    industry: "Technology",
    location: "San Francisco, CA",
    employees: 1250,
    founded: 2015,
    revenue: "$50M - $100M",
    website: "www.techvision.com",
    description: "Leading AI and machine learning solutions provider"
  },
  {
    id: "2",
    name: "HealthFirst Medical",
    industry: "Healthcare",
    location: "Boston, MA",
    employees: 3400,
    founded: 2010,
    revenue: "$100M - $500M",
    website: "www.healthfirst.com",
    description: "Innovative healthcare services and medical technology"
  },
  {
    id: "3",
    name: "GreenEnergy Solutions",
    industry: "Energy",
    location: "Austin, TX",
    employees: 890,
    founded: 2018,
    revenue: "$10M - $50M",
    website: "www.greenenergy.com",
    description: "Renewable energy and sustainability solutions"
  },
  {
    id: "4",
    name: "FinanceHub Corp",
    industry: "Finance",
    location: "New York, NY",
    employees: 5600,
    founded: 2008,
    revenue: "$500M - $1B",
    website: "www.financehub.com",
    description: "Digital banking and financial services platform"
  },
  {
    id: "5",
    name: "EduTech Learning",
    industry: "Education",
    location: "Seattle, WA",
    employees: 450,
    founded: 2019,
    revenue: "$5M - $10M",
    website: "www.edutech.com",
    description: "Online learning platform for professional development"
  },
  {
    id: "6",
    name: "RetailMax Solutions",
    industry: "Retail",
    location: "Chicago, IL",
    employees: 2100,
    founded: 2012,
    revenue: "$100M - $500M",
    website: "www.retailmax.com",
    description: "E-commerce and retail management solutions"
  },
  {
    id: "7",
    name: "CloudNet Systems",
    industry: "Technology",
    location: "San Jose, CA",
    employees: 780,
    founded: 2016,
    revenue: "$50M - $100M",
    website: "www.cloudnet.com",
    description: "Cloud infrastructure and hosting services"
  },
  {
    id: "8",
    name: "BioPharm Research",
    industry: "Healthcare",
    location: "Philadelphia, PA",
    employees: 1900,
    founded: 2011,
    revenue: "$100M - $500M",
    website: "www.biopharm.com",
    description: "Pharmaceutical research and development"
  },
  {
    id: "9",
    name: "AutoDrive Technologies",
    industry: "Automotive",
    location: "Detroit, MI",
    employees: 3200,
    founded: 2014,
    revenue: "$500M - $1B",
    website: "www.autodrive.com",
    description: "Autonomous vehicle technology and systems"
  },
  {
    id: "10",
    name: "FoodHub Delivery",
    industry: "Food & Beverage",
    location: "Los Angeles, CA",
    employees: 1500,
    founded: 2017,
    revenue: "$50M - $100M",
    website: "www.foodhub.com",
    description: "Food delivery and restaurant technology platform"
  },
  {
    id: "11",
    name: "SecureBank Digital",
    industry: "Finance",
    location: "Charlotte, NC",
    employees: 4200,
    founded: 2009,
    revenue: "$500M - $1B",
    website: "www.securebank.com",
    description: "Digital banking and cybersecurity solutions"
  },
  {
    id: "12",
    name: "MediaStream Pro",
    industry: "Entertainment",
    location: "Los Angeles, CA",
    employees: 950,
    founded: 2015,
    revenue: "$50M - $100M",
    website: "www.mediastream.com",
    description: "Streaming media and content distribution platform"
  },
  {
    id: "13",
    name: "AgriTech Farms",
    industry: "Agriculture",
    location: "Des Moines, IA",
    employees: 560,
    founded: 2018,
    revenue: "$10M - $50M",
    website: "www.agritech.com",
    description: "Smart farming and agricultural technology"
  },
  {
    id: "14",
    name: "RealEstate Connect",
    industry: "Real Estate",
    location: "Miami, FL",
    employees: 820,
    founded: 2016,
    revenue: "$50M - $100M",
    website: "www.realestate.com",
    description: "Real estate technology and property management"
  },
  {
    id: "15",
    name: "TravelEase Global",
    industry: "Travel",
    location: "Denver, CO",
    employees: 670,
    founded: 2017,
    revenue: "$10M - $50M",
    website: "www.travelease.com",
    description: "Travel booking and tourism management platform"
  },
  {
    id: "16",
    name: "CyberShield Security",
    industry: "Technology",
    location: "Washington, DC",
    employees: 1100,
    founded: 2013,
    revenue: "$50M - $100M",
    website: "www.cybershield.com",
    description: "Cybersecurity and data protection services"
  },
  {
    id: "17",
    name: "FashionForward Retail",
    industry: "Retail",
    location: "New York, NY",
    employees: 2800,
    founded: 2010,
    revenue: "$100M - $500M",
    website: "www.fashionforward.com",
    description: "Fashion retail and e-commerce platform"
  },
  {
    id: "18",
    name: "SolarWind Energy",
    industry: "Energy",
    location: "Phoenix, AZ",
    employees: 740,
    founded: 2019,
    revenue: "$10M - $50M",
    website: "www.solarwind.com",
    description: "Solar and wind energy solutions"
  },
  {
    id: "19",
    name: "LogiChain Transport",
    industry: "Logistics",
    location: "Memphis, TN",
    employees: 1900,
    founded: 2014,
    revenue: "$100M - $500M",
    website: "www.logichain.com",
    description: "Supply chain and logistics management"
  },
  {
    id: "20",
    name: "ConstructPro Build",
    industry: "Construction",
    location: "Houston, TX",
    employees: 1450,
    founded: 2011,
    revenue: "$100M - $500M",
    website: "www.constructpro.com",
    description: "Construction management and building technology"
  },
  {
    id: "21",
    name: "DataFlow Analytics",
    industry: "Technology",
    location: "San Francisco, CA",
    employees: 620,
    founded: 2018,
    revenue: "$10M - $50M",
    website: "www.dataflow.com",
    description: "Big data analytics and business intelligence"
  },
  {
    id: "22",
    name: "WellnessPath Health",
    industry: "Healthcare",
    location: "Portland, OR",
    employees: 890,
    founded: 2016,
    revenue: "$50M - $100M",
    website: "www.wellnesspath.com",
    description: "Wellness and preventive healthcare services"
  },
  {
    id: "23",
    name: "GameHub Studios",
    industry: "Entertainment",
    location: "Seattle, WA",
    employees: 450,
    founded: 2017,
    revenue: "$10M - $50M",
    website: "www.gamehub.com",
    description: "Video game development and publishing"
  },
  {
    id: "24",
    name: "InsureTech Pro",
    industry: "Finance",
    location: "Hartford, CT",
    employees: 1300,
    founded: 2015,
    revenue: "$50M - $100M",
    website: "www.insuretech.com",
    description: "Insurance technology and risk management"
  },
  {
    id: "25",
    name: "SmartHome Systems",
    industry: "Technology",
    location: "San Diego, CA",
    employees: 530,
    founded: 2019,
    revenue: "$5M - $10M",
    website: "www.smarthome.com",
    description: "Home automation and IoT solutions"
  }
];

export const industries = [
  "All Industries",
  "Technology",
  "Healthcare",
  "Finance",
  "Energy",
  "Education",
  "Retail",
  "Automotive",
  "Food & Beverage",
  "Entertainment",
  "Agriculture",
  "Real Estate",
  "Travel",
  "Logistics",
  "Construction"
];

export const locations = [
  "All Locations",
  "San Francisco, CA",
  "Boston, MA",
  "Austin, TX",
  "New York, NY",
  "Seattle, WA",
  "Chicago, IL",
  "San Jose, CA",
  "Philadelphia, PA",
  "Detroit, MI",
  "Los Angeles, CA",
  "Charlotte, NC",
  "Des Moines, IA",
  "Miami, FL",
  "Denver, CO",
  "Washington, DC",
  "Phoenix, AZ",
  "Memphis, TN",
  "Houston, TX",
  "Portland, OR",
  "Hartford, CT",
  "San Diego, CA"
];
