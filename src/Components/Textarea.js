import React from "react";

export default function Textarea(props){
  const { description, handleChange } = props;
  return (
    <textarea name="description"
              value={description}
              onChange={handleChange}
              cols={100}
              rows={5}/>
  )
}