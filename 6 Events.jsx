////////////////////////////////////////////////////////////////////////////////
// Responding to Events ////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// Events are written in camelCase.

export const LearnEvent = () => {
  // Event handlers need to be written inside the Component definition.
  const handleClick2 = (e) => {
    console.log('1st btn clicked');
  };
  const handleClick1 = (str) => {
    console.log(str);
  };
  return (
    <>
      {/* 1. Without Argument */}
      <button onClick={handleClick1}> Click Me</button>

      {/* 2. With Argument */}
      <button onClick={(e) => handleClick2("Subscribe Me")}> Click Me</button>
    </>
  );
};

// Notice on lines 19 & 22, we never call the function, only pass the function.
// Calling the function would result in an infinite loop error.
