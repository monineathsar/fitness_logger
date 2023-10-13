import { useState } from "react";
import "./LoggerForm.css";

const Logger = (props) => {
    const [enteredRep, setEnteredRep] = useState('');
    const [enteredWeight, setEnteredWeight] = useState('');

    const repChangeHandler = (event) => {
        setEnteredRep(event.target.value);
    };

    const weightChangeHandler = (event) => {
        setEnteredWeight(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const setData = {
            rep: enteredRep,
            weight: enteredWeight,
        };
        props.onSaveSetData(setData);
        setEnteredRep('');
        setEnteredWeight('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="logger">
                <div>
                    <div>
                        <input 
                        type='number'
                        value={enteredRep}
                        onChange={repChangeHandler}/>
                        <br></br>
                        <label>Reps</label>
                    </div>
                    <div>
                        <p>X</p>
                    </div>
                    <div>
                        <input type='number'
                        value={enteredWeight}
                        onChange={weightChangeHandler}/>
                        <br></br>
                        <label>Lbs</label>
                    </div>
                </div>
                <div className="logger-button">
                    <button type="submit">Log Set</button>
                </div>
            </div>
        </form>

    );
}

export default Logger;