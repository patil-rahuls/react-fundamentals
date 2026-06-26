## Lifting State UP

Means to pass Data from Child component to Parent component.

Earlier we used `"Props"` for passing data from Parent to Child component. But to pass data from child to parent we _"Lift the state Up"_.

To lift the state up, we pass a _function as a prop_ in the child component.

> Parent Component "App"
> ```javascript
> export cosnt App = () => {
>   const getDataFromChild = (data) => {
>     console.log(data);
>   }
>
>   return(
>     <ChildComponent myClick={getDataFromChild}/>
>   );
> };
>
> _'myClick' is the function as a prop so that we can pass data to this function from child._

> Child Component:
> ```javascript
> export const ChildComponent = ( { myClick } ) => {
>   
>   // Pass data from this child to parent
>   const handleClick = (e) => {
>     e.preventDefault();
>     const str = 'Hello From Child';
>     myClick(str); // Passed 'str' from Child to Parent.
>   };
>   
>   return (
>     <>
>       <button onClick={handleClick}>Click 1</button>
>     </>
>   );
> }
> ```