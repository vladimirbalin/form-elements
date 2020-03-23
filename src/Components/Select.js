import React from "react";

export default function Select(props) {
  const { selectedValue, handleSelectChange, multiple } = props;
  return (
    <select value={selectedValue}
            onChange={handleSelectChange}
            multiple={multiple}>
      <option value='ruby'>Ruby</option>
      <option value='node'>Node</option>
      <option value='python'>Python</option>
    </select>
  )
}