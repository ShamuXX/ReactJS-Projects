import logo from "./logo.svg";
import "./App.css";
import CardTestimonio from "./components/CardTestimonio";

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <div>
        <CardTestimonio
          nombre="Emma Bostian en Suecia"
          cargo="Ingeniera de Software en Spotify"
          foto="../Images/Emma-5a662db9bcf55809a1fefb2ea17634bc.png"
          texto='"Siempre he tenido problemas para aprender JavaScript. He tomado
        muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
        Estudiar JavaScript, así como estructuras de datos y algoritmos en
        freeCodeCamp me dio las habilidades y la confianza que necesitaba para
        conseguir el trabajo de mis sueños como ingeniero de software en
        Spotify."'
        />
        <CardTestimonio
          nombre="Emma Bostian en Suecia"
          cargo="Ingeniera de Software en Spotify"
          texto='"Siempre he tenido problemas para aprender JavaScript. He tomado
        muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
        Estudiar JavaScript, así como estructuras de datos y algoritmos en
        freeCodeCamp me dio las habilidades y la confianza que necesitaba para
        conseguir el trabajo de mis sueños como ingeniero de software en
        Spotify."'
        />
        <CardTestimonio
          nombre="Emma Bostian en Suecia"
          cargo="Ingeniera de Software en Spotify"
          texto='"Siempre he tenido problemas para aprender JavaScript. He tomado
        muchos cursos, pero el curso de freeCodeCamp fue el que se quedó.
        Estudiar JavaScript, así como estructuras de datos y algoritmos en
        freeCodeCamp me dio las habilidades y la confianza que necesitaba para
        conseguir el trabajo de mis sueños como ingeniero de software en
        Spotify."'
        />
      </div>
    </div>
  );
}

export default App;
