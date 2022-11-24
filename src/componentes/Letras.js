export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const letrasClicadas = [];

    function clicarLetra (letra) {
        letrasClicadas.push (letra)
        console.log (letra)
        console.log (letrasClicadas)
        console.log (letrasClicadas.includes (letra))
    }

    return (
        <div className="letras">
            {alfabeto.map((letra) => <div onClick={() => clicarLetra(letra)} className="letra">{letra.toUpperCase()}
                <div className={`esconder-letra ${letrasClicadas.includes (letra) ? '' : 'esconder'}`}></div>
            </div>)}
        </div>
    )
}