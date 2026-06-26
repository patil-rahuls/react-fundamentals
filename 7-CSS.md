## Inline CSS
```javascript
const MyApp = () => {
  const btnStyle = {
    backgroundColor: '#ffffff',
    color: '#12434', // single word properties
    fontSize: '12px' // multi-word properties in 'camelCase'.
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
```


## External CSS

### 1. Global import

> _File: CSS - ../css/style.css_
> ```css
> .btn-primary {
>     color: blue;
> }
> .center {
>     margin: 0 auto;
> }
> ```
> 
> _File 1: "ButtonComponent1"_
> ```javascript
> // This is a global import.
> import "../css/style.css" 
> export const ButtonComponent1 = () => {
>   return (
>     <>
>       <button className="btn-primary center">Save</button>
>     </>
>   );
> };
> ```
> _Problem: The css file is globally imported, that means, the css classes will be available across the entire React app, even if u imported it in a single component._
>
> _File 2: "ButtonComponent2"_
> ```javascript
> // No css imported here.
> export const ButtonComponent2 = () => {
>   return (
>     <>
>       <button className="btn-primary center">Save</button>
>     </>
>   );
> };
> ```
> _Here in the second component which is independent from the first one is still able to access the css classes._

Conflicts would arrise if the globally imported CSS like Material or Bootstrap etc, would have the same class names as in your css file.

_e.g. the class "btn-primary" may confict with the BootStrap's CSS._

If using our own custom CSS file, the Best Practice would be to have component-wise styling. (component specific) For that we use **_CSS Modules_**.

&nbsp;

### 2. CSS MODULE

Create a css file `"*.module.css"` When imported, React automatically picks it up as an object which will be scoped only to that component.

> _File: CSS - ../css/style_v1.module.css_
> ```css
> .btn-primary {
>     color: blue;
> }
> .center {
>     margin: 0 auto;
> }
> ```
> _File 1: "ButtonComponent3"_
> ```javascript
> import Style from "../css/style_v1.module.css";
> export const ButtonComponent3 = () => {
>   return (
>     <>
>       <button
>         className={`${Style.btn-primary} ${Style.center}`}
>       > Save </button>
>     </>
>   );
> };
> ```
> We have imported the css module `"style_v1.module.css"` only inside this component so, it can't be used in any other component automatically.


> _Now let's say we have another css file with the same classnames BUT INTEDED FOR a specific module._
> _File: CSS - ../css/button.module.css_
> ```css
> .btn-primary {
>     color: green;
> }
> .center {
>     margin: 0 auto;
> }
> ```
> _File: "ButtonComponent4"_
> ```javascript
> import Style from "../css/button.module.css";
> export const ButtonComponent4 = () => {
>   return (
>     <>
>       <button
>         className={`${Style.btn-primary} ${Style.center}`}
>       > Save </button>
>     </>
>   );
> };
> ```
> _This would apply css independently for this component even though the class-names are same as in the previous example._
>
> Main file:
> ```javascript
> import ButtonComponent3 from "./components/ButtonComponent3";
> import ButtonComponent4 from "./components/ButtonComponent4";
> export const MyApp = () => {
>   return (
>     <>
>       <ButtonComponent3 />
>       <ButtonComponent4 />
>     </>
>   );
> };
> ```
>
> _During build React automatically adds some prefix after the classname to differentiate between the two "same-name" css classes._
> ```html
> <div id="root">
>   <button
>     class="btn-primary_ueau0_2 center_ueau0_7"
>     >Save 1</button>
>   <button
>     class="btn-primary_1erau_1 center_1erau_1"
>     >Save 2</button>
> </div>
> ```

---
