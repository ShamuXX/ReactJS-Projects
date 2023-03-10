import "./App.css";
import React, { useState } from "react";
import Contador from "./components/Contador";
import Boton from "./components/Boton";
import "./styles/styles.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="contenedor">
        <Contador count={count} />
        <Boton
          text="Click"
          count={count}
          setCount={setCount}
          botonClick={true}
        />
        <Boton
          text="Reiniciar"
          count={count}
          setCount={setCount}
          botonClick={false}
        />
      </div>
    </div>
  );
}

export default App;
