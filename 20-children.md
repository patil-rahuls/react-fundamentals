## Component Composition - `children`

`children` is a special, built-in prop that allows you to pass components, HTML tags, or text content as nested data into another component.

It enables the creation of layout wrappers, layouts that mimic standard HTML nesting behavior.

_e.g. in ecommerce, we have cards with same appearance (i.e. same shadow, same colors, same border and same padding) but different content inside. That's when we use `{ children }` prop._

&nbsp;
> The Wrapper - `Card`
```javascript
function Card({ children }) {
  return (
    <div className="card-styled-container" style={{ border: '2px solid black', padding: '20px' }}>
      
      {/* React renders the nested content exactly here */}
      {children} 
    </div>
  );
}
```

> Using the <Card>
```javascript
function App() {
  return (
    <>
      <Card>
        <h2>Product Title</h2>
        <p>This is a great product description.</p>
        <button>Buy Now</button>
      </Card>

      <Card>
        <img src="avatar.png" alt="User profile" />
        <h3>Hello Rahul!</h3>
      </Card>
    </>
  );
}
```

---
