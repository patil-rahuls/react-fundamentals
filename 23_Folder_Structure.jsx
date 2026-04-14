/////////////////////////////////////////////////////////////
// Folder structure : real-world React projects /////////////
/////////////////////////////////////////////////////////////
/*

1. The Gold Standard: "Feature-Based Architecture"
https://github.com/alan2207/bulletproof-react

Folder Structure:
    Organized by features
    e.g., features/cart, features/products...
    Each feature contains its own components, hooks, types,
    and API calls.

    Easier to test
    Better code ownership
    scales across large teams

Tech Stack:
    TypeScript,
    React Query (for server state),
    Zustand (for global state), and
    Tailwind CSS

Logic = Hooks:
    Extract business logic into custom Hooks.
    This keep components clean & easy to test
    Re-usable across the app.



src/
├── app/
│   ├── App.jsx
│   ├── store.jsx          # Store configuration
│   └── hooks.jsx          # Typed versions of useDispatch and useSelector
├── components/            # Shared, reusable UI components (Buttons, Inputs, Modals)
├── features/
│   ├── auth/              # Everything related to Authentication
│   │   ├── authSlice.jsx  # The slice (actions + reducer)
│   │   ├── Login.jsx      # Component specific to this feature
│   │   └── authAPI.jsx    # API calls for this feature
│   ├── products/          # Everything related to Products
│   │   ├── productSlice.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductItem.jsx
│   │   └── ...
├── hooks/
│   ├── customhook1.jsx
│   ├── customhook2.jsx
│   └── ...
├── layouts/               # A high-level container that dictates where the navigation, sidebars, and footers live across different pages.
│   ├── MainLayout.tsx     # The standard view for logged-in users (includes Header, Sidebar, and Footer).
│   ├── AuthLayout.tsx     # A centered, minimal layout for Login/Signup pages (no navigation).
│   ├── AdminLayout.tsx    # A dashboard-style layout with an expanded management sidebar.
│   ├── PublicLayout.tsx   # Used for the landing page or documentation (top-nav only).
│   └── ...
├── pages/                 # Routes
│   ├── home.jsx
│   ├── product.jsx
│   ├── about.jsx
│   ├── contact.jsx
│   └── ...
├── services/              # Global API clients or base configurations
└── utils/                 # Helper functions (date formatting, validation)

*/
