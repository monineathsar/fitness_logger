import "./Logger.css";

const Logger = () => {
    return (
        <div className="logger">
            <div>
                <input type='number'></input>
                <br></br>
                <label>REPS</label>
                <p>X</p>
                <input type='number'></input>
                <br></br>
                <label>LBS</label>
            </div>
            <div className="logger-button">
                <button type="submit">Log Set</button>
            </div>
        </div>
    );
}

export default Logger;