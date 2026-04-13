//////////////////////////////////////////////////////////////
// React Props ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Props are short for "properties".
// Props are a way to pass data from a parent component to a
// child component. They are read-only and cannot be modified
// by the child component.

// In the JSX, props are added using curly bracess {}
function Square() {
  const dataTitle = 'TicTacToe';
  const src = 'home-page';
  return (
    <MyButton data={dataTitle} source={src}></MyButton>
  );
}
// Here, the 'data' and the 'source' are called "props".
// These props are passed from parent component "Square()" to
// the child component "MyButton"

// In the child component i.e. "MyButton", we can define these
// props like these:
function MyButton({data, source}) {
  return (
    <button data-title={data} source={source}></button>
  );
}

// In React, you specify a CSS class with "className".
<img className="avatar" />
// HTML equivalent -> <img class="avatar" />

// Inline CSS:
// When specifying inline style, notice the double curly
// braces {{ ... }}
function Profile() {
  return (
    <img style={{
          width: user.imageSize,
          height: user.imageSize
        }}
    />
  );
}
