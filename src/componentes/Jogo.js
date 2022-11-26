
export default function Jogo({imagem, escolherPalavra, palavra, corLose, corWin, formandoPalavra, addTracos}) {

    return (
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
    )
}