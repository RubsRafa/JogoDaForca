import Chute from "./componentes/Chute";
// import Jogo from "./componentes/Jogo";
// import Letras from "./componentes/Letras";
import Palavras from "./palavras"
import { useState } from "react";
import forca0 from '../src/assets/forca0.png'
import forca1 from '../src/assets/forca1.png'
import forca2 from '../src/assets/forca2.png'
import forca3 from '../src/assets/forca3.png'
import forca4 from '../src/assets/forca4.png'
import forca5 from '../src/assets/forca5.png'
import forca6 from '../src/assets/forca6.png'


function App() {

    const [iniciar, setIniciar] = useState(false);
    const [palavra, setPalavra] = useState('')
    const [imagem, setImagem] = useState(forca0);

    const [selecionados, setSelecionados] = useState([]);
    const [palavraJogo, setPalavraJogo] = useState([]);
    const [formandoPalavra, setFormandoPalavra] = useState('');
    const [qtdErro, setQtdErro] = useState(0);
    const [corWin, setCorWin] = useState(false)
    const [corLose, setCorLose] = useState(false)
    const [chute, setChute] = useState('');

    let addTracos = '';
    for (let i = 0; i < palavra.length; i++) {
        addTracos += '_ ';
    }

    let embaralhar = Palavras;
    embaralhar.sort(misturar)

    function misturar() {
        return Math.random() - 0.5
    }




    function escolherPalavra() {
        setIniciar(true)
        setImagem(forca0)
        setPalavra(embaralhar[0])

        setSelecionados([]);
        setPalavraJogo([]);
        setFormandoPalavra(addTracos)
        setQtdErro(0);
        setCorWin(false)
        setCorLose(false)
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    function clicarLetra(letraSelecionada) {
        if (!selecionados.includes(letraSelecionada)) {
            setSelecionados([...selecionados, letraSelecionada]);
        }

        if (palavra.includes(letraSelecionada)) {
            letraCorreta(letraSelecionada);
        } else {
            setQtdErro(qtdErro + 1)
            letraIncorreta();
        }
    }

    function letraCorreta(l) {

        let addTracos2 = '';
        for (let i = 0; i < palavra.length; i++) {
            addTracos2 += '_';
        }
        let novaPalavraJogo = [...addTracos2];
        const arrayLetra = palavra.split('');
        setPalavraJogo(novaPalavraJogo);

        arrayLetra.forEach((letra, index) => {
            novaPalavraJogo = palavraJogo;
            if (letra == l) {
                novaPalavraJogo[index] = letra;
            }
            if (novaPalavraJogo[index] == arrayLetra[index]) {
                novaPalavraJogo[index] = letra;
            }
            if (!novaPalavraJogo[index]) {
                novaPalavraJogo[index] = '_ ';
            }
        });
        setPalavraJogo(novaPalavraJogo)
        setFormandoPalavra(novaPalavraJogo)
        ganhou(arrayLetra);
    }

    function letraIncorreta() {

        if (qtdErro == 0) {
            setImagem(forca1)
        }
        if (qtdErro == 1) {
            setImagem(forca2)
        }
        if (qtdErro == 2) {
            setImagem(forca3)
        }
        if (qtdErro == 3) {
            setImagem(forca4)
        }
        if (qtdErro == 4) {
            setImagem(forca5)
        }
        if (qtdErro == 5) {
            setImagem(forca6);
            setFormandoPalavra(palavra)
            setIniciar(false)
            setCorLose(true)
        }
    }



    function ganhou() {

        let conferirPalavra = '';
        for (let i = 0; i < formandoPalavra.length; i++) {
            conferirPalavra += formandoPalavra[i]
        }

        if (conferirPalavra === palavra) {
            setCorWin(true);
            setIniciar(false)
        }
    }

    function verificarChute() {

        if (chute === palavra) {
            setCorWin(true);
            setIniciar(false)
            setFormandoPalavra(palavra)
        } else {
            setFormandoPalavra(palavra)
            setCorLose(true);
            setIniciar(false)
            setImagem (forca6)
        }
    }




    return (
        <div className="jogo">
            <div className="visual">
                <div className="forca">
                    <img data-test="game-image" src={imagem} />
                </div>

                <div className="conteudo">
                    <div data-test="choose-word" onClick={escolherPalavra} className='palavra'>
                        <h1>Escolher palavra</h1>
                    </div>
                    <div className="tracos">
                        <h1 data-test="word" data-answer={palavra} className={`palavrasecreta ${corLose ? 'red' : ''} ${corWin ? 'green' : ''}`}>{!formandoPalavra ? addTracos : formandoPalavra}

                            {/* <div className="traco"></div> */}
                        </h1>
                    </div>
                </div>
            </div>


            <div className="letras">
                {alfabeto.map((letra) => <div data-test="letter" onClick={() => clicarLetra(letra)} className='letra'>{letra.toUpperCase()}
                    <div className={`esconder-letra ${selecionados.includes(letra) || !iniciar ? '' : 'esconder'}`}></div>
                </div>)}
            </div>


            {/* <Jogo palavras={Palavras} palavra={palavra} setPalavra={setPalavra} imagem={imagem} setImagem={setImagem} esconderPalavra={esconderPalavra} setEsconderPalavra={setEsconderPalavra} formandoPalavra={formandoPalavra} />
      <Letras selecionados={selecionados} setSelecionados={setSelecionados} palavra={palavra} formandoPalavra={formandoPalavra} setFormandoPalavra={setFormandoPalavra}/> */}
            {/* <Chute /> */}

            <div className="tentativas">
                <h1>Já sei a palavra!</h1>
                <input data-test="guess-input" onChange={(e) => setChute(e.target.value)} value={chute}></input>
                <div data-test="guess-button" onClick={() => verificarChute()}>Chutar</div>
            </div>
        </div>
    );
}

export default App;
