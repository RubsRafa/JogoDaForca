
function App() {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div className="jogo">
      <div className="visual">
        <div className="forca">
          <img src="./assets/forca0.png" />
        </div>

        <div className="conteudo">
          <div className='palavra'>
            <h1>Escolher palavra</h1>
          </div>
          <div className="tracos">
            <h1 className="palavrasecreta"></h1>
            <div className="traco"></div>
          </div>
        </div>
      </div>
      <div className="letras">
        {alfabeto.map((letra) => <div className="letra">{letra.toUpperCase()}</div>)}
      </div>
      <div className="tentativas">
        <h1>Já sei a palavra!</h1>
        <input></input>
        <div>Chutar</div>
      </div>
    </div>
  );
}

export default App;
