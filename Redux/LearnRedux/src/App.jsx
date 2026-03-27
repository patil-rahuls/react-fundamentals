import './App.css'
import { themeToggle, setSpecificTheme } from './features/theme/themeSlice';
import { useDispatch, useSelector  } from "react-redux";

function App() {
  const bgColor = useSelector((state) => state.themeColor);
  const dispatch = useDispatch();
  return(
    <>
      <div style={{ width: '300px', height: '200px', backgroundColor: bgColor.val}}>
          {/* A Blank div to fill in colors.  */}
      </div>
      <input type='text' name="customTheme" onChange={() => { dispatch(setSpecificTheme()) }}/>
      <button onClick={() => { dispatch(themeToggle()) }}>
        Change Theme
      </button>
    </>
  );
};

export default App;
