import './App.css';
import WeatherApp from './components/WeatherApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import React from 'react';


function App(){
  //pull the set states above here, throw it to the props to pass to the component
  
    return(
      <div className="App">
        <div className="container w-75">
          <WeatherApp/>
        </div>
      </div>
    )
  
}


export default App;
