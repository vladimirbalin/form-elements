import React from "react";

export default function CheckBoxes(props){
  const { checkBoxGroup, handleCheckbox } = props;
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="checkBoxGroup"
          value="node"
          checked={checkBoxGroup["node"]}
          onChange={handleCheckbox}
        />
        Node
      </label>
      <br/>
      <label>
        <input
          type="checkbox"
          name="checkBoxGroup"
          value="react"
          checked={checkBoxGroup["react"]}
          onChange={handleCheckbox}
        />
        React
      </label>
      <br/>
      <label>
        <input
          type="checkbox"
          name="checkBoxGroup"
          value="express"
          checked={checkBoxGroup["express"]}
          onChange={handleCheckbox}
        />
        Express
      </label>
      <br/>
      <label>
        <input
          type="checkbox"
          name="checkBoxGroup"
          value="mongodb"
          checked={checkBoxGroup["mongodb"]}
          onChange={handleCheckbox}
        />
        Mongodb
      </label>
    </div>
  );
}