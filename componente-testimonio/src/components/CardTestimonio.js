import React from "react";
import "../styles/CardTestimonio.css";
function CardTestimonio(props) {
  return (
    <div className="card">
      <img
        className="imagen-testimonio"
        src={require(`../Images/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`}
      />
      <div className="contenedor-texto">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{props.texto}</p>
      </div>
    </div>
  );
}
export default CardTestimonio;
