/////////////////////////////////////////////////////////////
// ENV File /////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// We create '.env' file in the root directory.
// e.g
//  .env.qa
//  .env.prod

// Using '.env' files is build-tool specific.
// Means, if I have used Vite to create a React app,
// we append "VITE_" before any keys in the env file.

// For the lgecay 'create-react-app' it was 'REACT_APP_'

// File: ".env.qa"
VITE_BASE_API_URL = "https://qa-url.com/myapp"
VITE_API_KEY = "tivyd897w9dudv09qwd0qw9dvq0wd79"

// For importing the '.env' variables, we use
// "import.meta.env.<VariableName>"

const MyApp = () => {
  return (
    <>
      <p>API URL: {import.meta.env.VITE_BASE_API_URL}</p>
    </>
  );
};
