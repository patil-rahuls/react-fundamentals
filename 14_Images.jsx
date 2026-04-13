/////////////////////////////////////////////////////////////
// How to use Images in a Component /////////////////////////
/////////////////////////////////////////////////////////////

// Assume we have an image in ../public/images/logo.png

import Logo from "../public/images/logo.png";
// We can have a default import name for our imported image.
export const MyApp = () => {
  return (
    <>
      <img src={Logo} alt="" width="80px"></img>
    </>
  );
};

// That's it!
