import Chute from "./componentes/Chute";
import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
import palavras from "./palavras";


function App() {

  return (
    <div className="jogo">
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}

export default App;
