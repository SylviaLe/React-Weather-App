import React from 'react'

const WeatherInfo = (props) => {
    return (
        <div className='container'>
            <h1>{props.location}</h1>

            {/* icon: https://github.com/erikflowers/weather-icons */}
            <h5 className="y-4">
                <i className={`wi ${props.icon} display-1`}></i>
            </h5>
            {/* temp, min and max */}
            {props.temp ? (<h1 className="py-2">{props.temp}&deg;C</h1>):null}

            {minmax(props.max, props.min)}
            {/* description */}
            <h4 className="px-3">{props.des}</h4>

            {props.feel ? (<h6>Feels like: {props.feel}&deg;C</h6>):null}
            {props.wind ? (<h6>Wind speed: {props.wind} km/h</h6>):null}
            {props.humidity ? (<h6>Humidity: {props.humidity}%</h6>):null}
            {props.rise&&props.set ? (<h6>Sunrise: {props.rise} | Sunset: {props.set}</h6>):null}
            
        </div>
    )
}

function minmax(min, max){
    if (min&&max){
        return(
            <h3>
                <span className="px-4">{min}&deg;C</span>
                <span className="px-4">{max}&deg;C</span>
            </h3>
        )
    }
}


export default WeatherInfo
