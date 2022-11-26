
// export default function Jogo({palavras, palavra, setPalavra, imagem, setImagem, esconderPalavra, setEsconderPalavra, formandoPalavra}) {
//     let embaralhar = palavras;
//     embaralhar.sort (misturar)
//     console.log (formandoPalavra)

//     function misturar () {
//         return Math.random() - 0.5
//     }

//     function escolherPalavra () {
//         setImagem ("./assets/forca0.png")
//         setPalavra (embaralhar[0])
//         let addTracos = '';

//         for (let i = 0; i < palavra.length; i++) {
//             addTracos += '_ ';
//         }
//         setEsconderPalavra (addTracos)
//     }

//     return (
//         <div className="visual">
//             <div className="forca">
//                 <img src={imagem} />
//             </div>

//             <div className="conteudo">
//                 <div onClick={escolherPalavra} className='palavra'>
//                     <h1>Escolher palavra</h1>
//                 </div>
//                 <div className="tracos">
//                     <h1 className="palavrasecreta">{esconderPalavra}
                        
//                         {/* <div className="traco"></div> */}
//                     </h1>
//                 </div>
//             </div>
//         </div>
//     )
// }