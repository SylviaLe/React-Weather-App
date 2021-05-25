import React, { Component } from 'react'
import WeatherInfo from './WeatherInfo'
import Form from './Form'

const API_key = process.env.REACT_APP_WEATHER_API_KEY

export class WeatherApp extends Component {

    //initialize all the vars needed, including states 
    constructor(){
        super()
        this.state = {
        city: undefined,
        country: undefined,
        icon: undefined,
        temp: undefined,
        min: undefined,
        max: undefined,
        feel: undefined,
        des: '', 
        error: false,
        wind: undefined,
        humidity: undefined,
        rise: undefined,
        set: undefined,
        }

        this.weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog",
        }
    }

    //convert the id returned in the json to the weather icon provided by the github repo
    getIcon(icons, rangeId) {
        switch (true) {
        case rangeId >= 200 && rangeId < 232:
            this.setState({ icon: icons.Thunderstorm });
            break;
        case rangeId >= 300 && rangeId <= 321:
            this.setState({ icon: icons.Drizzle });
            break;
        case rangeId >= 500 && rangeId <= 521:
            this.setState({ icon: icons.Rain });
            break;
        case rangeId >= 600 && rangeId <= 622:
            this.setState({ icon: icons.Snow });
            break;
        case rangeId >= 701 && rangeId <= 781:
            this.setState({ icon: icons.Atmosphere });
            break;
        case rangeId === 800:
            this.setState({ icon: icons.Clear });
            break;
        case rangeId >= 801 && rangeId <= 804:
            this.setState({ icon: icons.Clouds });
            break;
        default:
            this.setState({ icon: icons.Clouds });
        }
    }

    //Fetch data from the API and set the states
    getWeather = async(e) =>{
        e.preventDefault() 

        const place = e.target.search.value.split(',')
        const city = place[0].trim();
        const country = place[place.length - 1].trim();
        //console.log(city)
        //console.log(country)

        if(city&&country){
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=metric`)
            // use backticks `` instead of ''

            //get the json
            const response = await api_call.json()
            console.log(response)

            if(response.cod === "404"){
                //data not found
                this.setState(()=> ({
                    error : true
                }))
            }

            else{
                this.setState({
                    location: `${response.name}, ${response.sys.country}`,
                    temp:response.main.temp,
                    min:response.main.temp_max,
                    max:response.main.temp_min,
                    feel: response.main.feels_like,
                    des:response.weather[0].description,
                    wind:response.wind.speed, 
                    humidity:response.main.humidity, 
                    rise: this.getUTCTime(response.sys.sunrise), 
                    set:this.getUTCTime(response.sys.sunset),
                })
    
                this.getIcon(this.weatherIcon, response.weather[0].id);  //since this is done by a separate method, put it outside
            }

        }
        else{
            this.setState({
                error: true
            })
        }
        
        
    }

    getUTCTime(sec){
        var date = new Date(sec * 1000);
        var timestr = date.toLocaleTimeString();
        return timestr
    }


    render() {
        return (
            <div>
                <Form getWeather={this.getWeather} error={this.state.error}/>
                <WeatherInfo 
                    location={this.state.city} 
                    temp={this.state.temp} 
                    min={this.state.min} 
                    max={this.state.max} 
                    des={this.state.des} 
                    icon={this.state.icon}
                    feel={this.state.feel}
                    wind={this.state.wind}
                    humidity={this.state.humidity}
                    rise={this.state.rise}
                    set={this.state.set}
                />
            </div>
        )
    }
}

export default WeatherApp
