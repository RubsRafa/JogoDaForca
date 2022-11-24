export default function Jogo() {
    return (
        <div className="visual">
            <div className="forca">
                <img src="./assets/forca0.png" />
            </div>

            <div className="conteudo">
                <div className='palavra'>
                    <h1>Escolher palavra</h1>
                </div>
                <div className="tracos">
                    <h1 className="palavrasecreta">
                        <div className="traco"></div>
                    </h1>
                </div>
            </div>
        </div>
    )
}