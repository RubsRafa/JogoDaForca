
export default function Letras({alfabeto, clicarLetra, selecionados, iniciar}) {

    return (
        <div className="letras">
                {alfabeto.map((letra) => <div data-test="letter" onClick={() => clicarLetra(letra)} className='letra'>{letra.toUpperCase()}
                    <div className={`esconder-letra ${selecionados.includes(letra) || !iniciar ? '' : 'esconder'}`}></div>
                </div>)}
            </div>
    )
}