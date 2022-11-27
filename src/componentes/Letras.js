export default function Letras({alfabeto, clicarLetra, selecionados, iniciar,  disable}) {

    return (
        <div className="letras">
                {alfabeto.map((letra) => <div key={letra} data-test="letter" onClick={disable ? '' : () => clicarLetra(letra)} className='letra'>{letra.toUpperCase()}
                    <div className={`esconder-letra ${selecionados.includes(letra) || !iniciar ? '' : 'esconder'}`}></div>
                </div>)}
            </div>
    )
}