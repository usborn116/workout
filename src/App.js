import './App.css';
import Button from './components/Button';
import List from './components/List';
import { useState } from 'react';
import {Arms, Legs, Abs} from './components/WorkoutArrays';
import Footer from './components/Footer';

function App() {
  const [workouts, setWorkouts] = useState([])

  const clickHandler = async (type) => {
    await clear()
    let x;
    if (type.name === 'Arms'){x = Arms};
    if (type.name === 'Legs'){x = Legs}
    if (type.name === 'Abs'){x = Abs}
    setWorkouts(shuffle(x))
  }

  const clear = () => setWorkouts([])

  function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  return (
    <div className="App">
      <h1>Let's Work Out!</h1>
      <h2>Choose a Workout Type</h2>
      <div className="button-container">
      <Button name='Arms' img='💪' clickHandler={clickHandler}/>
      <Button name='Abs' img='🏋️' clickHandler={clickHandler}/>
      <Button name='Legs' img='🦵' clickHandler={clickHandler}/>
      </div>
      <List workouts={workouts}/>
      <Footer />
    </div>
  );
}

export default App;
