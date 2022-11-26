// import { useState } from "react";

// export default function Letras({selecionados, setSelecionados, palavra, formandoPalavra, setFormandoPalavra}) {

//     const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

//     function clicarLetra (letraSelecionada) {
//         if (!selecionados.includes (letraSelecionada)) {
//             setSelecionados([...selecionados, letraSelecionada])
//         } 
//         for (let i = 0; i < palavra.length; i++) {
//             if (palavra[i] == letraSelecionada) {
//                 formandoPalavra += letraSelecionada;
//             } else {
//                 formandoPalavra += '_ ';
//             }
//         }
//         console.log (palavra)
//         console.log (formandoPalavra)
//     }

//     return (
//         <div className="letras">
//             {alfabeto.map((letra) => <div onClick={() => clicarLetra(letra)} className="letra">{letra.toUpperCase()}
//                 <div className={`esconder-letra ${selecionados.includes (letra) ? '' : 'esconder'}`}></div>
//             </div>)}
//         </div>
//     )
// }