import data from "./components/TestimonioData";
import "./App.css";
import CardTestimonio from "./components/CardTestimonio";

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <div>
        <CardTestimonio
          nombre={data.testimonioShawn.nombre}
          pais={data.testimonioShawn.pais}
          cargo={data.testimonioShawn.cargo}
          empresa={data.testimonioShawn.empresa}
          imagen={data.testimonioShawn.imagen}
          texto={data.testimonioShawn.texto}
        />
        <CardTestimonio
          nombre={data.testimonioSarah.nombre}
          pais={data.testimonioSarah.pais}
          cargo={data.testimonioSarah.cargo}
          empresa={data.testimonioSarah.empresa}
          imagen={data.testimonioSarah.imagen}
          texto={data.testimonioSarah.texto}
        />
        <CardTestimonio
          nombre={data.testimonioEmma.nombre}
          pais={data.testimonioEmma.pais}
          cargo={data.testimonioEmma.cargo}
          empresa={data.testimonioEmma.empresa}
          imagen={data.testimonioEmma.imagen}
          texto={data.testimonioEmma.texto}
        />
      </div>
    </div>
  );
}

export default App;
