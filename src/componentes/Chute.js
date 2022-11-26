export default function Chute({setChute, chute, verificarChute}) {

    
    return (
        <div className="tentativas">
                <h1>Já sei a palavra!</h1>
                <input data-test="guess-input" onChange={(e) => setChute(e.target.value)} value={chute}></input>
                <div data-test="guess-button" onClick={() => verificarChute()}>Chutar</div>
            </div>
    ); 
}