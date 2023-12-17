import axios from "axios"
import { RECEVIE_WEATHER_ERROR, RECEVIE_WEATHER_RESPONSE, SEND_WEATHER_REQUEST } from "./weatherTypes"

const sendWeatherRequest = ()=>{
    
    return {
        type: SEND_WEATHER_REQUEST
    }

}
const recevieWeatherResponse = (data)=>{
    
    return {
        type: RECEVIE_WEATHER_RESPONSE,
        payload : data
    }

}
const recevieWeatherError = (data)=>{
    
    return {
        type: RECEVIE_WEATHER_ERROR,
        payload : data
    }

}


const getWeatherInfo = (query)=>{
    return dispatch=>{
        dispatch(sendWeatherRequest())
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=7ebcd0b29f8e07a508956a38313b3ce0`).then(res=>{
            dispatch(recevieWeatherResponse(res.data))
        }).catch(error=>{
            dispatch(recevieWeatherError(error.message))
        })
    }
}


export default getWeatherInfo;