import react, { useState } from "react";
import Boton from "./Boton.js";

function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="contador">
        <h1>{count}</h1>
      </div>
      <div className="contenedor-btn">
        <Boton text="Click" count={count} setCount={setCount} boton={true} />
        <Boton
          text="Reiniciar"
          boton={false}
          count={count}
          setCount={setCount}
        />
      </div>
    </div>
  );
}

export default Contador;
