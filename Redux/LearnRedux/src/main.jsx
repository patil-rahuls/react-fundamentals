import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import the Store
import { store } from './app/store.jsx';
// Import the Provider
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* The store above will be accessible to all the
      components(even nested) that come under "App" */}
      <App />
    </Provider>
  </StrictMode>
);
