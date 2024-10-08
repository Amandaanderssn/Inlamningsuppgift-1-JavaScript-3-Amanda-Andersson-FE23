// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ClockComponent from './components/Clock.jsx';

function App() {

  //currentTime lagrar det nuvarande klockslaget med hjälp av Date() objektet
  //setTime är en funktion som uppdaterar värdet
  const [currentTime, setTime] = useState(new Date());

  //En arrow-funktion som hämtar det nuvarande klockslaget och sedan upd state till det nya klockslaget
  //Detta renderar om komponenten
  const UpdateTime = () => {
    let time = new Date()
    setTime(time)
  }
  //anroper arrow-funktionen UpdateTime varje sekund (per 1000ms)
  setInterval(UpdateTime, 1000)


  //Returnerar props time som innehåller currentTime
  return (
    <div className="App">
      <ClockComponent time={currentTime}></ClockComponent>
    </div>
  );
}

export default App;
