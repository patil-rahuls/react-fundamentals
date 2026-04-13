/////////////////////////////////////////////////////////////
// Folder structure as seen in real-world React projects ////
/////////////////////////////////////////////////////////////
/*

src/
├── App.jsx
├── app/
│   ├── store.jsx          # Store configuration
│   └── hooks.jsx          # Typed versions of useDispatch and useSelector
├── components/            # Global, reusable UI components (Buttons, Inputs, Modals)
├── features/
│   ├── auth/              # Everything related to Authentication
│   │   ├── authSlice.jsx  # The slice (actions + reducer)
│   │   ├── Login.jsx      # Component specific to this feature
│   │   └── authAPI.jsx    # API calls for this feature
│   ├── products/          # Everything related to Products
│   │   ├── productSlice.jsx
│   │   ├── ProductList.jsx
│   │   └── ProductItem.jsx
├── hooks/
│   ├── customhook1.jsx
│   └── customhook2.jsx
├── layouts/               # A high-level container that dictates where the navigation, sidebars, and footers live across different pages.
│   ├── MainLayout.tsx     # The standard view for logged-in users (includes Header, Sidebar, and Footer).
│   ├── AuthLayout.tsx     # A centered, minimal layout for Login/Signup pages (no navigation).
│   ├── AdminLayout.tsx    # A dashboard-style layout with an expanded management sidebar.
│   ├── PublicLayout.tsx   # Used for the landing page or documentation (top-nav only).
├── pages/                 # Routes
│   ├── homepage.jsx
│   └── customhook2.jsx
├── services/              # Global API clients or base configurations
└── utils/                 # Helper functions (date formatting, validation)

*/
