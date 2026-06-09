/////////////////////////////////////////////////////////////
// Inline CSS ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////
const MyApp = () => {
  const btnStyle = {
    backgroundColor: '#ffffff',
    color: '#12434', // single word css properties are
                     // written as it is.
    fontSize: '12px' // multiple word css properties are
                     // written in 'camelCase'.
  };
  return (
    <>
      <button style={btnStyle}>Save</button>
      <button
        style={{...btnStyle, ...{color: 'orange'}}}
      >Cancel</button>
    </>
  );
};



/////////////////////////////////////////////////////////////
// External CSS /////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// How to apply css from external CSS file.

// 1. Global import
/* --------------------------
|CSS File: ../css/style.css |
|    .btn-primary {         |
|        color: blue;       |
|    }                      |
|    .center {              |
|        margin: 0 auto;    |
|    }                      |
---------------------------*/

// File 1: "ButtonComponent1"
import "../css/style.css" // This is a global import.
export const ButtonComponent1 = () => {
  return (
    <>
      <button className="btn-primary center">Save</button>
    </>
  );
};
// Problem: The css file is globally imported, that means,
// the css classes will be available across the entire React
// app, even if u imported it in a single component.

// File 2: "ButtonComponent2"
export const ButtonComponent2 = () => {
  return (
    <>
      <button className="btn-primary center">Save</button>
    </>
  );
};
// Here in the second component which is independent from
// the first one is still able to access the css classes.

// Conflicts would arrise if the globally imported CSS like
// Material or Bootstrap etc, would have the same class names
// as in your css file.
// e.g. the class "btn-primary" may confict with the
// BootStrap's CSS.

// If using our own custom CSS file, the Best Practice would
// be to have component-wise styling. (component specific)
// For that we use CSS Modules.



/////////////////////////////////////////////////////////////
// CSS MODULE ///////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// Create a css file with filename ending with "*.module.css"
// When imported, React automatically picks it up as a
// object which will be scoped only to that component.

/* -----------------------------------
|CSS File: ../css/style_v1.module.css |
|    .btn-primary {                   |
|        color: blue;                 |
|    }                                |
|    .center {                        |
|        margin: 0 auto;              |
|    }                                |
-------------------------------------*/
// File 1: "ButtonComponent3"
import Style from "../css/style_v1.module.css";
export const ButtonComponent3 = () => {
  return (
    <>
      <button
        className={`${Style.btn-primary} ${Style.center}`}
      > Save </button>
    </>
  );
};
// We have imported the css module "style_v1.module.css" only
// inside this component so, it can't be used in any other
// component automatically (like what happend with global
// css import).


// Now let's say we have another css file with the same
// classnames BUT INTEDED FOR a specific module.
/* -----------------------------------
|CSS File: ../css/style_v2.module.css |
|    .btn-primary {                   |
|        color: skyblue;              |
|    }                                |
|    .center {                        |
|        margin: 0 auto;              |
|    }                                |
-------------------------------------*/
// File 2: "ButtonComponent4"
import Style from "../css/style_v2.module.css";
export const ButtonComponent4 = () => {
  return (
    <>
      <button
        className={`${Style.btn-primary} ${Style.center}`}
      >Save</button>
    </>
  );
};
// This would apply css independently for this component
// even though the class-names are same as in the previous
// example.


// Main file
import ButtonComponent3 from "./components/ButtonComponent3";
import ButtonComponent4 from "./components/ButtonComponent4";
export const MyApp = () => {
  return (
    <>
      <ButtonComponent3 />
      <ButtonComponent4 />
    </>
  );
};

// When this is rendered in HTML, React automatically adds
// some prefix after the classname to differentiate between
// the two "same-name" css classes.
<div id="root">
  <button
    class="btn-primary_ueau0_2 center_ueau0_7"
    >Save 1</button>
  <button
    class="btn-primary_1erau_1 center_1erau_1"
    >Save 2</button>
</div>
