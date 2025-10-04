# Company Directory

A modern, responsive React application for browsing and filtering company information. Built with industry-standard practices and modern web technologies.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Advanced Filtering**: Search by company name, filter by industry and location
- **Sorting**: Sort companies by name, industry, location, employees, or founding year
- **Pagination**: Navigate through large datasets with customizable page sizes
- **Real-time Statistics**: Dynamic stats showing filtered results
- **Modern UI**: Clean, professional interface built with Tailwind CSS and Radix UI
- **TypeScript**: Full type safety and excellent developer experience
- **Performance**: Optimized with React hooks and memoization

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React hooks (useState, useMemo)
- **Development**: ESLint, TypeScript compiler

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   └── pagination.tsx
│   ├── CompanyTable.tsx    # Main data table component
│   ├── CompanyFilters.tsx  # Search and filter controls
│   └── CompanyPagination.tsx # Pagination component
├── data/
│   └── mockCompanies.ts    # Mock data and TypeScript interfaces
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main application component
├── index.css              # Global styles and Tailwind setup
└── main.tsx               # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd companiesdirectory
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Usage

### Filtering Companies

1. **Search**: Use the search input to find companies by name
2. **Industry Filter**: Select an industry from the dropdown to filter by sector
3. **Location Filter**: Choose a location to filter by geographic region
4. **Clear Filters**: Select "All Industries" or "All Locations" to clear filters

### Sorting Data

Click on any column header to sort the data:
- **Company Name**: Alphabetical sorting
- **Industry**: Sort by industry type
- **Location**: Sort by geographic location
- **Employees**: Sort by company size
- **Founded**: Sort by founding year

### Pagination

- **Page Size**: Choose how many companies to display per page (5, 10, 25, or 50)
- **Navigation**: Use the pagination controls to navigate between pages
- **Page Info**: View current page information and total results

## 🎨 Design System

The application uses a custom design system built on top of Tailwind CSS:

### Colors
- **Primary**: Blue theme for interactive elements
- **Secondary**: Gray tones for supporting content
- **Success**: Green for positive indicators
- **Warning**: Yellow for caution states
- **Muted**: Subtle text and backgrounds

### Components
- **Cards**: Rounded containers with subtle shadows
- **Buttons**: Multiple variants (default, outline, ghost, link)
- **Inputs**: Clean form controls with focus states
- **Tables**: Responsive data tables with hover effects
- **Pagination**: Intuitive navigation controls

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full feature set with side-by-side layouts
- **Tablet**: Adapted layouts with touch-friendly controls
- **Mobile**: Stacked layouts with optimized spacing

## 🔧 Customization

### Adding New Companies

Edit `src/data/mockCompanies.ts` to add new companies:

```typescript
{
  id: "unique-id",
  name: "Company Name",
  industry: "Industry Type",
  location: "City, State",
  employees: 1000,
  founded: 2020,
  revenue: "$10M - $50M",
  website: "www.company.com",
  description: "Company description"
}
```

### Styling

Modify `src/index.css` to customize the design system:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-hover: 221.2 83.2% 60%;
  /* Add your custom colors */
}
```

### Adding New Filters

1. Add new filter options to the data arrays
2. Update the filter logic in `App.tsx`
3. Add new UI controls in `CompanyFilters.tsx`

## 🚀 Performance Optimizations

- **Memoization**: Used `useMemo` for expensive calculations
- **Component Splitting**: Separated concerns into focused components
- **Lazy Loading**: Implemented loading states for better UX
- **Efficient Filtering**: Optimized filter algorithms
- **Responsive Images**: Optimized for different screen sizes

## 🧪 Testing

The application includes:

- **Type Safety**: Full TypeScript coverage
- **Linting**: ESLint configuration for code quality
- **Error Boundaries**: Graceful error handling
- **Loading States**: User feedback during data operations

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS# Companies-Directory
