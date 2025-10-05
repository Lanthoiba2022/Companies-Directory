<div align="center">

# 🏢 Company Directory

*A modern, responsive React application for browsing and filtering company information*

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

[🚀 Live Demo](#-getting-started) • [📖 Documentation](#-features) • [🤝 Contributing](#-contributing)

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔍 **Advanced Search & Filtering**
- Real-time search by company name
- Filter by industry and location
- Dynamic filter combinations
- Instant results with live statistics

### 📱 **Responsive Design**
- fully responsive on small, medium & large screens.

</td>
<td width="50%">

### 📊 **Data Management**
- Sortable columns (name, industry, location, employees, founded)
- Customizable pagination (5, 10, 25, 50 items per page)
- Real-time statistics dashboard
- Efficient data processing

### 🎨 **Modern UI/UX**
- Clean, professional design
- Dark/light theme support
- Smooth animations and transitions
- Accessible components

</td>
</tr>
</table>

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="20%">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)

**Frontend Framework**

</td>
<td align="center" width="20%">

![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**Type Safety**

</td>
<td align="center" width="20%">

![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**Build Tool**

</td>
<td align="center" width="20%">

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Styling**

</td>
<td align="center" width="20%">

![Radix UI](https://img.shields.io/badge/Radix_UI-1.0.0-161618?style=for-the-badge&logo=radixui&logoColor=white)

**UI Components**

</td>
</tr>
</table>

### 🏗️ **Architecture & Tools**

| Category | Technology | Purpose |
|----------|------------|---------|
| **🎨 UI/UX** | Tailwind CSS, Radix UI, Lucide React | Styling, components, icons |
| **⚡ Performance** | React Query, useMemo, useCallback | State management, caching |
| **🔧 Development** | ESLint, TypeScript, Vite | Code quality, type safety, bundling |
| **📦 Package Manager** | npm | Dependency management |
| **🌐 HTTP Client** | Fetch API | Data fetching |

## 📁 Project Structure

```
companiesdirectory/
├── 📁 public/                 # Static assets
│   └── vite.svg
├── 📁 src/
│   ├── 📁 components/         # React components
│   │   ├── 📁 ui/            # Reusable UI primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── table.tsx
│   │   │   └── pagination.tsx
│   │   ├── CompanyTable.tsx   # Main data table
│   │   ├── CompanyFilters.tsx # Search & filter controls
│   │   └── CompanyPagination.tsx # Pagination component
│   ├── 📁 hooks/             # Custom React hooks
│   │   ├── useCompanies.ts
│   │   ├── useCompanyFilters.ts
│   │   └── usePagination.ts
│   ├── 📁 services/          # API services
│   │   └── api.ts
│   ├── 📁 lib/               # Utility functions
│   │   └── utils.ts
│   ├── 📁 data/              # Mock data
│   │   └── db.json
│   ├── App.tsx               # Main application
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── 📄 package.json           # Dependencies & scripts
├── 📄 tailwind.config.ts     # Tailwind configuration
├── 📄 vite.config.ts         # Vite configuration
└── 📄 tsconfig.json          # TypeScript configuration
```

## 🚀 Quick Start

### Prerequisites

| Requirement | Version | Download |
|-------------|---------|----------|
| ![Node.js](https://img.shields.io/badge/Node.js-20.19+-339933?style=flat-square&logo=node.js&logoColor=white) | 20.19+ or 22.12+ | [Download](https://nodejs.org/) |
| ![npm](https://img.shields.io/badge/npm-10.0+-CB3837?style=flat-square&logo=npm&logoColor=white) | 10.0+ | Included with Node.js |

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd companiesdirectory
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev:full
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### 🛠️ Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| 🚀 **Development** | `npm run dev` | Start development server with hot reload |
| 🏗️ **Build** | `npm run build` | Build for production |
| 👀 **Preview** | `npm run preview` | Preview production build locally |
| 🔍 **Lint** | `npm run lint` | Run ESLint for code quality |
| 🧹 **Clean** | `npm run clean` | Clean build artifacts |
| 🗄️ **Database** | `npm run server` | Start JSON server for mock data |
| 🔄 **Full Stack** | `npm run dev:full` | Start both frontend and backend |

## 🎯 Usage Guide

### 🔍 **Search & Filtering**

<table>
<tr>
<td width="50%">

#### **Text Search**
- Type in the search box to find companies by name
- Real-time filtering as you type
- Case-insensitive matching
- Instant results with live count

#### **Industry Filter**
- Select from dropdown menu
- Filter by specific industry sectors
- Shows count of companies per industry
- "All Industries" option to clear filter

</td>
<td width="50%">

#### **Location Filter**
- Choose from available locations
- Geographic region filtering
- Multiple location support
- "All Locations" option to clear filter

#### **Combined Filters**
- Use multiple filters simultaneously
- Search + Industry + Location
- Dynamic statistics update
- Clear all filters with one click

</td>
</tr>
</table>

### 📊 **Data Sorting**

| Column | Sort Type | Description |
|--------|-----------|-------------|
| **🏢 Company Name** | Alphabetical | A-Z / Z-A sorting |
| **🏭 Industry** | Categorical | Group by industry type |
| **📍 Location** | Alphabetical | Sort by geographic region |
| **👥 Employees** | Numerical | Sort by company size |
| **📅 Founded** | Chronological | Sort by founding year |

### 📄 **Pagination Controls**

- **Page Size Options**: 5, 10, 25, or 50 items per page
- **Navigation**: Previous/Next buttons with page numbers
- **Page Info**: Current page and total pages display
- **Jump to Page**: Direct navigation to specific pages
- **Results Count**: Total filtered results shown

## 🎨 Design System

### 🎨 **Color Palette**

<table>
<tr>
<td align="center" width="20%">

![Primary](https://img.shields.io/badge/Primary-3B82F6-3B82F6?style=for-the-badge&logoColor=white)

**Primary Blue**
Interactive elements, buttons, links

</td>
<td align="center" width="20%">

![Secondary](https://img.shields.io/badge/Secondary-6B7280-6B7280?style=for-the-badge&logoColor=white)

**Secondary Gray**
Supporting content, borders

</td>
<td align="center" width="20%">

![Success](https://img.shields.io/badge/Success-10B981-10B981?style=for-the-badge&logoColor=white)

**Success Green**
Positive indicators, success states

</td>
<td align="center" width="20%">

![Warning](https://img.shields.io/badge/Warning-F59E0B-F59E0B?style=for-the-badge&logoColor=white)

**Warning Yellow**
Caution states, warnings

</td>
<td align="center" width="20%">

![Muted](https://img.shields.io/badge/Muted-9CA3AF-9CA3AF?style=for-the-badge&logoColor=white)

**Muted Gray**
Subtle text, backgrounds

</td>
</tr>
</table>

### 🧩 **Component Library**

| Component | Variants | Usage |
|-----------|----------|-------|
| **🃏 Cards** | Default, Elevated, Outlined | Content containers, data display |
| **🔘 Buttons** | Primary, Secondary, Outline, Ghost, Link | Actions, navigation |
| **📝 Inputs** | Text, Search, Select, Number | Form controls, filtering |
| **📊 Tables** | Responsive, Sortable, Hover | Data presentation |
| **📄 Pagination** | Compact, Full, Jump-to-page | Navigation controls |

## 📱 Responsive Design

<table>
<tr>
<td width="33%">

### 🖥️ **Desktop** (1024px+)
- Full feature set available
- Side-by-side layouts
- Hover interactions
- Multi-column grids

</td>
<td width="33%">

### 📱 **Tablet** (768px - 1023px)
- Adapted layouts
- Touch-friendly controls
- Optimized spacing
- Collapsible sections

</td>
<td width="33%">

### 📱 **Mobile** (< 768px)
- Stacked layouts
- Single column design
- Touch-optimized buttons
- Swipe-friendly navigation

</td>
</tr>
</table>

## 🔧 Customization

### 📝 **Adding New Companies**

Edit `data/db.json` to add new companies:

```json
{
  "id": "unique-id",
  "name": "Company Name",
  "industry": "Technology",
  "location": "San Francisco, CA",
  "employees": 1000,
  "founded": 2020,
  "revenue": "$10M - $50M",
  "website": "www.company.com",
  "description": "Company description"
}
```


### 🔧 **Adding New Filters**

1. **Add filter options** to the data arrays in hooks
2. **Update filter logic** in `useCompanyFilters.ts`
3. **Add UI controls** in `CompanyFilters.tsx`
4. **Update types** in TypeScript interfaces

## ⚡ Performance Optimizations

<table>
<tr>
<td width="50%">

### 🧠 **Memory Management**
- **useMemo**: Expensive calculations cached
- **useCallback**: Function references optimized
- **Component splitting**: Focused, lightweight components
- **Lazy loading**: On-demand component loading

### 🔄 **Data Processing**
- **Efficient filtering**: Optimized search algorithms
- **Debounced search**: Reduced API calls
- **Pagination**: Large datasets handled efficiently
- **Memoized selectors**: Computed values cached

</td>
<td width="50%">

### 🎨 **Rendering Optimizations**
- **Virtual scrolling**: Large lists optimized
- **Conditional rendering**: Components load when needed
- **Image optimization**: Responsive images with lazy loading
- **CSS-in-JS**: Minimal runtime overhead

### 📊 **Bundle Optimization**
- **Code splitting**: Dynamic imports for routes
- **Tree shaking**: Unused code eliminated
- **Minification**: Production builds optimized
- **Gzip compression**: Assets compressed

</td>
</tr>
</table>

## 🧪 Testing & Quality

### ✅ **Code Quality**

| Tool | Purpose | Status |
|------|---------|--------|
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat-square&logo=typescript&logoColor=white) | Type Safety | ✅ Full Coverage |
| ![ESLint](https://img.shields.io/badge/ESLint-9.36.0-4B32C3?style=flat-square&logo=eslint&logoColor=white) | Code Quality | ✅ Configured |
| ![Prettier](https://img.shields.io/badge/Prettier-3.0.0-F7B93E?style=flat-square&logo=prettier&logoColor=white) | Code Formatting | ✅ Integrated |

### 🛡️ **Error Handling**

- **Error Boundaries**: Graceful error recovery
- **Loading States**: User feedback during operations
- **Fallback UI**: Meaningful error messages
- **Retry Mechanisms**: Automatic retry on failures



## Acknowledgments

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide React](https://lucide.dev/) - Icons
- [Vite](https://vitejs.dev/) - Build tool

---

<div align="center">

**Design & crafted by Khumanthem Lanthoiba Meitei**


</div>
