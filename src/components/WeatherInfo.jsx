import React from 'react'

const WeatherInfo = (props) => {
    document.body.style = 'background: ' + props.bgcolors;
    
    return (
        <div className='container text-light'>
            <div className="row">
                <div className="col-md-6 text-center">
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
                </div>
                <div className="col-md-6">
                    {props.feel ? (<h5 className='my-3 mt-5'>Feels like: {props.feel}&deg;C</h5>):null}
                    {props.wind ? (<h5 className='my-3'>Wind speed: {props.wind} km/h</h5>):null}
                    {props.humidity ? (<h5 className='my-3'>Humidity: {props.humidity}%</h5>):null}
                    {props.rise&&props.set ? (<h5 className='my-3'>Sunrise: {props.rise} | Sunset: {props.set}</h5>):null}
                </div>
            </div>
        </div>
    )
}

function minmax(min, max){
    if (min&&max){
        return(
            <h6>
                <span className="px-4">{min}&deg;C</span>
                <span className="px-4">{max}&deg;C</span>
            </h6>
        )
    }
}


export default WeatherInfo
