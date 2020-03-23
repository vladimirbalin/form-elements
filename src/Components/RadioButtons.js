import React from "react";

export default function RadioButtons(props) {
  const { radioGroup, handleRadio } = props;
  return (
    <div>
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="angular"
          checked={radioGroup["angular"]}
          onChange={handleRadio}
        />
        Angular
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="react"
          checked={radioGroup["react"]}
          onChange={handleRadio}
        />
        React
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="radioGroup"
          value="vue"
          checked={radioGroup["vue"]}
          onChange={handleRadio}
        />
        Vue
      </label>
    </div>
  )
}