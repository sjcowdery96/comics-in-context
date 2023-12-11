import React, { useContext } from "react";
import StylesContext from "./StylesContext"

export default function CollectorButton() {
  //using a hook to sync data across the virtual DOM
  const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}  
