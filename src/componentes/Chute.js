export default function Chute({setChute, chute, verificarChute, disable}) {

    
    return (
        <div className="tentativas">
                <h1>Já sei a palavra!</h1>
                <input data-test="guess-input" onChange={disable ? '' : (e) => setChute(e.target.value)} value={chute.toLowerCase()}></input>
                <div data-test="guess-button" onClick={disable ? '' : () => verificarChute()}>Chutar</div>
            </div>
    ); 
}