import React from "react";

function Form_sml({ background = "#ffffff", color = "#000" }) {
  return (
    <div className="inputelems flex flex-col items-end">
      <input
        style={{ backgroundColor: background, color }}
        type="text"
        placeholder="Name"
      />
      <input
        style={{ backgroundColor: background, color }}
        type="text"
        placeholder="Phone Number"
      />
      <textarea
        style={{ backgroundColor: background, color }}
        placeholder="Message"
      />
      <button>Let us help you...</button>
    </div>
  );
}

export default Form_sml;
