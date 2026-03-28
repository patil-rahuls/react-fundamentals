/* Recommended folder structure for any React application:

src/
├── app/
│   ├── store.js          # Store configuration
│   └── hooks.js          # Typed versions of useDispatch and useSelector
├── features/
│   ├── auth/             # Everything related to Authentication
│   │   ├── authSlice.js  # The slice (actions + reducer)
│   │   ├── Login.jsx     # Component specific to this feature
│   │   └── authAPI.js    # API calls for this feature
│   ├── products/         # Everything related to Products
│   │   ├── productSlice.js
│   │   ├── ProductList.jsx
│   │   └── ProductItem.jsx
├── components/           # Global, reusable UI components (Buttons, Inputs, Modals)
├── services/             # Global API clients or base configurations
└── utils/                # Helper functions (date formatting, validation)



*/
