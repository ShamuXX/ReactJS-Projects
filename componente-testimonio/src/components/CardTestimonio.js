import React from "react";
import "../styles/CardTestimonio.css";
function CardTestimonio(props) {
  return (
    <div className="card">
      <img
        className="imagen-testimonio"
        src={require("../Images/Emma-5a662db9bcf55809a1fefb2ea17634bc.png")}
        alt="Foto de Emma"
      />
      <div className="contenedor-texto">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">{props.texto}</p>
      </div>
    </div>
  );
}
export default CardTestimonio;
