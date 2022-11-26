import Chute from "./componentes/Chute";
// import Jogo from "./componentes/Jogo";
// import Letras from "./componentes/Letras";
import Palavras from "./palavras"
import { useState } from "react";


function App() {

    const [palavra, setPalavra] = useState('')
    const [imagem, setImagem] = useState("./assets/forca0.png");

    const [selecionados, setSelecionados] = useState([]);
    const [palavraJogo, setPalavraJogo] = useState([]);

    let addTracos = '';
    for (let i = 0; i < palavra.length; i++) {
        addTracos += '_ ';
    }

    const [formandoPalavra, setFormandoPalavra] = useState('');

    let embaralhar = Palavras;
    embaralhar.sort(misturar)

    function misturar() {
        return Math.random() - 0.5
    }


    function escolherPalavra() {
        setImagem("./assets/forca0.png")
        setPalavra(embaralhar[0])
        setFormandoPalavra(addTracos)
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    function clicarLetra(letraSelecionada) {
        if (!selecionados.includes(letraSelecionada)) {
            setSelecionados([...selecionados, letraSelecionada]);
            letraCorreta(letraSelecionada)
        } else {
            letraIncorreta (letraSelecionada)
        }
    }

    function letraCorreta (l) {

        // let arrayPalavra = [];
        // for (let i = 0; i < palavra.length; i++) {
        //     arrayPalavra.push (palavra[i]);
        // }
        // console.log (arrayPalavra)


        // let teste = [];
        // let resultado = '';
        // for (let k = 0; k < arrayPalavra.length; k++) {
        //     if (arrayPalavra[k] == l) {
        //         resultado += l;
        //         teste.push (l);
        //     } else {
        //         resultado += '_ ';
        //         teste.push ('_ ');
        //     }
        // }
        // setFormandoPalavra(resultado)
    }


    function letraIncorreta (l) {
        console.log ('letra já foi selecionada')
    }


    return (
        <div className="jogo">
            <div className="visual">
                <div className="forca">
                    <img src={imagem} />
                </div>

                <div className="conteudo">
                    <div onClick={escolherPalavra} className='palavra'>
                        <h1>Escolher palavra</h1>
                    </div>
                    <div className="tracos">
                        <h1 className="palavrasecreta">{!formandoPalavra ? addTracos : formandoPalavra}

                            {/* <div className="traco"></div> */}
                        </h1>
                    </div>
                </div>
            </div>


            <div className="letras">
                {alfabeto.map((letra) => <div onClick={() => clicarLetra(letra)} className="letra">{letra.toUpperCase()}
                    <div className={`esconder-letra ${selecionados.includes(letra) ? '' : 'esconder'}`}></div>
                </div>)}
            </div>


            {/* <Jogo palavras={Palavras} palavra={palavra} setPalavra={setPalavra} imagem={imagem} setImagem={setImagem} esconderPalavra={esconderPalavra} setEsconderPalavra={setEsconderPalavra} formandoPalavra={formandoPalavra} />
      <Letras selecionados={selecionados} setSelecionados={setSelecionados} palavra={palavra} formandoPalavra={formandoPalavra} setFormandoPalavra={setFormandoPalavra}/> */}
            <Chute />
        </div>
    );
}

export default App;
