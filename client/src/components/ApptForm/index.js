import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" id="event-name" type="text" {...props} />
    </div>
  );
}

// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success" id="submit-btn">{props.children}</button>
  );
}
