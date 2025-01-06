import { useState } from 'react'
import Weather from './components/Weather'
import Dropdown from './components/Dropdown'
import DateTime from './components/DateTime'
import './App.css'

function App() {
  const [city, setCity] = useState('Lagos');
  const cities = ['Lagos', 'New York', 'London', 'Tokyo', 'Sydney', 'Paris', 'Dubai', 'Moscow', 'Beijing', 'Mumbai'];


  return (
    <>
      <div className="App"> 
        <header className="App-header"> 
          <div className="header-left"> 
            <h1>Weather App</h1> 
          </div> 
          <div className="header-right"> 
            <DateTime /> 
          </div> 
        </header> 
        <div className="content"> 
          <Dropdown options={cities} onSelect={setCity} /> 
          <Weather city={city} /> 
        </div> 
      </div>
    </>
  )
}

export default App
