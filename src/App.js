import Chute from "./componentes/Chute";
import Jogo from "./componentes/Jogo";
import Letras from "./componentes/Letras";
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
    const [disable, setDisable] = useState(true);

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
        setDisable (false)
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    function clicarLetra(letraSelecionada) {
        if (!selecionados.includes(letraSelecionada)) {
            setSelecionados([...selecionados, letraSelecionada]);
        }

        if (selecionados.includes (letraSelecionada)) {
            setDisable(true)
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
            setDisable (true)
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
            setDisable (true)
        }
    }

    function verificarChute() {

        if (chute.toLowerCase() === palavra) {
            setCorWin(true);
            setIniciar(false)
            setFormandoPalavra(palavra)
            setDisable (true)
        } else {
            setFormandoPalavra(palavra)
            setCorLose(true);
            setIniciar(false)
            setImagem(forca6)
            setDisable (true)
        }
    }


    return (
        <div className="jogo">
            <Jogo key={palavra} imagem={imagem} escolherPalavra={escolherPalavra} palavra={palavra} corLose={corLose} corWin={corWin} formandoPalavra={formandoPalavra} addTracos={addTracos} /> 
            <Letras key={alfabeto} disable={disable} alfabeto={alfabeto} clicarLetra={clicarLetra} selecionados={selecionados} iniciar={iniciar} />
            <Chute ley={chute} disable={disable} setChute={setChute} chute={chute} verificarChute={verificarChute} /> 
        </div>
    );
}

export default App;
