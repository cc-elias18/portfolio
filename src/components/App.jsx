import '../styles/App.css';
import Banner from './Banner';
import Body1 from './Body1';
import Body2 from './Body2';

function App() {
  return(
    <div className="App">
      <Banner/>
      <Body1/>
      <p>Estoy en proceso de terminar el secundario técnico con orientación en programación y curso en Fundación EMPUJAR (en colaboración con la Universidad Tecnológica Nacional) una capacitación en desarrollo fullstack.
Soy creativo y mayormente autónomo. Me gusta mucho manejarme de forma interdisciplinaria. (Soy lector, músico, escritor, entusiasta de siempre aprender algo nuevo).
Hasta la fecha no me han contratado por lo que estoy entusiasmado pero no impaciente.</p>
      <Body2/>
    </div>
  );
}

export default App;
