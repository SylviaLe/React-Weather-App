import './App.css';
import WeatherApp from './components/WeatherApp'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import React from 'react';


class App extends React.Component{

  //pull the set states above here, throw it to the props to pass to the component
  render(){
    return(
      <div className="App">
        <WeatherApp/>
      </div>
    )
  }
}


export default App;
