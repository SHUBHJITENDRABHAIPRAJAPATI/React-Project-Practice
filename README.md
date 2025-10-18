# React Practice Projects 🚀

A comprehensive collection of React practice projects designed to help developers learn and master React fundamentals through hands-on examples.

## 📚 What's Inside

This project demonstrates key React concepts including:

- ✅ **React Hooks** - useState, useEffect, and custom hooks
- ✅ **Component Architecture** - Reusable, modular components
- ✅ **Props & State Management** - Data flow and state handling
- ✅ **React Router** - Client-side routing and navigation
- ✅ **Form Handling** - Controlled components and validation
- ✅ **Modern ES6+** - Arrow functions, destructuring, modules

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.jsx      # Button component with variants
│   ├── Card.jsx        # Card component for content layout
│   ├── Layout.jsx      # Main layout wrapper
│   └── Navbar.jsx      # Navigation bar with routing
├── pages/              # Page components
│   ├── Home.jsx        # Landing page with overview
│   ├── About.jsx       # About page with useEffect demo
│   ├── Dashboard.jsx   # Interactive dashboard with hooks
│   └── Contact.jsx     # Contact form with validation
├── hooks/              # Custom React hooks
│   ├── useCounter.js   # Counter hook for state management
│   └── useLocalStorage.js  # localStorage sync hook
└── App.jsx            # Main app with routing setup
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SHUBHJITENDRABHAIPRAJAPATI/React-Project-Practice.git
cd React-Project-Practice
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📖 Features by Page

### Home Page
- Component composition examples
- State management with useState
- Dynamic content rendering
- Responsive grid layouts

### About Page
- useEffect hook demonstration
- Live clock with automatic cleanup
- Conditional rendering
- Interactive toggles

### Dashboard Page
- Custom hooks implementation (useCounter, useLocalStorage)
- Form inputs with state
- Todo list with state management
- Theme switching
- Component showcase

### Contact Page
- Form handling with controlled components
- Input validation
- Error state management
- Success feedback

## 🎨 Component Library

### Button Component
```jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```
Variants: primary, secondary, danger, success
Sizes: small, medium, large

### Card Component
```jsx
<Card title="Card Title" footer={<Button>Action</Button>}>
  Card content goes here
</Card>
```

## 🔧 Technologies Used

- **React 19** - UI library
- **React Router 6** - Routing solution
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **ESLint** - Code linting

## 📝 Learning Resources

This project covers:

1. **Component Patterns**
   - Functional components
   - Props and PropTypes
   - Children composition
   - Conditional rendering

2. **React Hooks**
   - useState for local state
   - useEffect for side effects
   - Custom hooks for reusable logic
   - Hook dependencies and cleanup

3. **State Management**
   - Lifting state up
   - State updates and immutability
   - Form state handling
   - localStorage integration

4. **Routing**
   - Route configuration
   - Navigation with Link
   - Active route styling
   - useLocation hook

## 🤝 Contributing

This is a practice project, but suggestions and improvements are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available for learning purposes.

## 🙏 Acknowledgments

Built as a learning resource for React developers. Perfect for:
- Beginners learning React basics
- Developers practicing component patterns
- Anyone building a React portfolio

---

**Happy Coding!** 💻✨
