import React from "react";

const Weather = props =>(

            <div className="weather__info weather__key">
                {props.city && props.city && <p >Location: {props.city}, {props.country}</p>}
                {props.temperature && <p className="weather__value">Temperature: {(props.temperature-273.15).toFixed(2)+" Celcius"}</p>}
                {props.humidity && <p>Humidity: {props.humidity+"%"}</p>}
                {props.description && <p className="">Weather Description: {props.description}</p>}
                {props.error && <p className="weather__error">{props.error}</p>}
                
            </div>
        );


export default Weather;