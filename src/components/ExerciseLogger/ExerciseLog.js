import ExerciseName from './ExerciseName';
import Logger from './Logger';
import SetList from './SetList'

import './ExerciseLog.css';

const ExerciseLog = () => {
    return (
        <div className='exercise-log'>
            <ExerciseName/>
            <Logger/>
            <SetList/>
        </div>
    );
}

export default ExerciseLog;