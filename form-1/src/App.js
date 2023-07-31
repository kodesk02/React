import { useState } from "react";

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("option 1");

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        Select an option:
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
        <option value="option 3">Option 3</option>
        <option value="option 4">Option 4</option>
        <option value="option 5">Option 5</option>
      </select>
      </label>
      <p>Selected option: {selectedOption}</p>
    </div>
  )
};


export default Dropdown;