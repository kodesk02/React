import { useState } from "react";
import './App.css'
// The useState defines the state variable (InputValue) and the state update (setInputValue)

function ControlledComponent(){
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    // The value props set the intial value of the input element of the variable Input Value 
    setInputValue(event.target.value);
  };

  return(
    <form>
      <label>Input Value:
        {/* The onChange handle changes made to the input value */}

        <input type="text" value={inputValue} onChange={handleChange}/>
      </label>
      <p>Input Value:The value is {inputValue}</p>
    </form>
  )
};


export default ControlledComponent;