import ExerciseName from './ExerciseName';
import LoggerForm from './LoggerForm';
import SetList from './SetList'

import './ExerciseLog.css';

const ExerciseLog = () => {
    return (
        <div className='exercise-log'>
            <ExerciseName/>
            <LoggerForm/>
            <SetList/>
        </div>
    );
}

export default ExerciseLog;