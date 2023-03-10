import react, { useState } from "react";
import "../styles/styles.css";

function Contador({ count }) {
  return (
    <div className="contador">
      <h1>{count}</h1>
    </div>
  );
}

export default Contador;
