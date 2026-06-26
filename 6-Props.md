## React Props

Props are short for _"properties"_.

Props are a way to pass data from a parent component to a child component. 

> **_IMP: Props are read-only and cannot be modified by the child component._**

In the JSX, props are added using curly bracess `{ }`
> ```javascript
> function Square() {
>   const dataTitle = 'Save';
>   const src = 'home-page';
>   return (
>     <MyButton data={dataTitle} source={src}></MyButton>
>   );
> }
> ```
> _Here, the `'data'` and the `'source'` are called "props"._ 
>
> _These props are passed from parent component `"Square()"` to the child component `"MyButton"`._
> 
> _In the child component `"MyButton"`, we can define these props like this:_
> ```javascript
> function MyButton({data, source}) {
>   return (
>     <button source={source}> {data} </button>
>   );
> }
> ```

#### **The _class_ attribute**

In React, you specify a CSS class with `"className"`.

```javascript
<img className="avatar" />
// Its HTML -> <img class="avatar" />
```

#### Other attributes:
JSX uses camelCase for HTML attributes and event handlers.

- class becomes `className`
- for becomes `htmlFor`
- onclick becomes `onClick`
- tabindex becomes `tabIndex`

#### **Inline CSS**
When specifying inline style, notice the double curly braces `{{ ... }}`
```javascript
// Notice: 'background-color' becomes 'backgroundColor'
const styleObj = { color: 'blue', backgroundColor: 'lightgray' };

const element = <div style={styleObj}>Styled Box</div>;
```
---
