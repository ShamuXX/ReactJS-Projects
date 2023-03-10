import react from "react";

function Boton(props) {
  return (
    <button
      className="boton-click"
      onClick={
        props.boton
          ? () => props.setCount(props.count + 1)
          : () => props.setCount(0)
      }
    >
      {props.text}
    </button>
  );
}

export default Boton;
