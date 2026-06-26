## How to use Images in a Component

_Assume we have an image `../public/images/logo.png`_

Image can be imported like a module/JavaScript object and used.

```javascript
import Logo from "../public/images/logo.png";
// Default import name for imported image.

export const MyApp = () => {
  return (
    <>
      <img src={Logo} alt="" width="80px"></img>
    </>
  );
};
```

That's it!

---
