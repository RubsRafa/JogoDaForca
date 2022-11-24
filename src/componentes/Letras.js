import { useState } from "react";

export default function Letras(palavra) {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        const [selecionados, setSelecionados] = useState ([]); 
        console.log (selecionados)

    function clicarLetra (letraSelecionada) {
        if (!selecionados.includes (letraSelecionada)) {
            setSelecionados([...selecionados, letraSelecionada])
        }
    }

    return (
        <div className="letras">
            {alfabeto.map((letra) => <div onClick={() => clicarLetra(letra)} className="letra">{letra.toUpperCase()}
                <div className={`esconder-letra ${selecionados.includes (letra) ? '' : 'esconder'}`}></div>
            </div>)}
        </div>
    )
}