import { useState } from 'react';
import './App.css';
import ExerciseLog from './components/ExerciseLogger/ExerciseLog';

const DUMMY_EXERCISES = [
  {
      name: 'Barbell Squat',
      reps: 6,
      weight: 140,
      sets: 4,
      date: new Date(2021, 2, 12)
  },
  {
      name: 'Romanian Deadlift',
      reps: 10,
      weight: 75,
      sets: 4,
      date: new Date(2021, 2, 12)
  },
  {
      name: 'Barbell Hipthrusts',
      reps: 10,
      weight: 165,
      sets: 4,
      date: new Date(2021, 2, 12)
  },
  {
      name: 'Hip Abductors',
      reps: 15,
      weight: 70,
      sets: 4,
      date: new Date(2021, 2, 12)
  },

]


function App() {
  const [ exercises, setExercise ] = useState(DUMMY_EXERCISES)
  return (
    <div className="App">
      <ExerciseLog items={exercises}/>
    </div>
  );
}

export default App;
