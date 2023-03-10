import react from "react";
import "../styles/styles.css";

function Boton(props) {
  return (
    <button
      className={props.botonClick ? "boton-click" : "boton-reiniciar"}
      onClick={
        props.botonClick
          ? () => props.setCount(props.count + 1)
          : () => props.setCount(0)
      }
    >
      {props.text}
    </button>
  );
}

export default Boton;
