import React, { useEffect, useState } from "react";
import PersianDate from "./PersianDate";
import { useDispatch, useSelector } from "react-redux";
import getWeatherInfo from "../redux/weather/weatherActions";

const Weather = ()=>{
   
   const {loading , data , error} = useSelector(state=>state);
   const dispatch = useDispatch()
   const [backMode , setBackMode] = useState('usual');

   const [query , setQuery] = useState('')


   const handleGetWeather = e=>{
       e.preventDefault()
       dispatch(getWeatherInfo(query))
       console.log(data);
       setQuery('')
   }

   useEffect(()=>{

   if(!data.main){
      return
   }
     
   let temp = data.main.temp;
   if(temp < 7){
    setBackMode("cold")
   }else if(temp < 17){
    setBackMode("usual")
   }else{
    setBackMode('warm')
   }

   } , [data]) 

   return (
       <div className={`app container-fluid back_${backMode}`}>

          <div className="row justify-content-center">
               <div className="col-10 col-md-6 col-lg-4 col-xl-3">
                   <form onSubmit={handleGetWeather} className="mt-5">
                      <input type="text" className="w-100 text-center form-border form-fontsize" placeholder={data.name || "نام شهر یا کشور"} value={query} onChange={(e)=>setQuery(e.target.value)}/>
                   </form>
               </div>           
          </div>  
          
          <div className="row justify-content-center py-5 pt-4">
              <div className="col-11 col-md-8 col-lg-4 col-xl-3">
                   <h3 className="text-center">
                        <PersianDate/>
                   </h3>

              </div>
          </div>

          {loading ? (
             <div className="text-center text-primary mt-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
             </div>
          ) : data.main ? (
              <>
          <div className="row justify-content-center py-3">
            <div className="col-9 col-md-6 col-lg-4 col-xl-3">
                <div className="temprature-box py-3 text-center">
                     <span className="fontsize-temprature text-color tempspecial">{Math.round(data.main.temp)} °C </span> 
                </div>
            </div>
          </div>  
           
           <div className="row justify-content-center py-2">
               <div className="col-11 col-md-6 col-lg-4 col-xl-3">
                    <h3 className="text-center text-color">Wind :</h3>
                    <h3 className="text-center text-color">{data.wind.deg} - deg</h3>
                    <h3 className="text-center text-color">{data.wind.speed} - Speed</h3>
               </div>
           </div>

            <div className="row justify-content-center py-3 pt-4">
                <div className="col-12 col-md-8 col-lg-4 col-xl-3">
                     <h1 className="text-center text-color">{data.weather[0].main}</h1>
                </div>
            </div>
              </>
          ) : error ? (
             <h3 className="text-center text-color">نام شهر یا کشور را به درستی وارد کنید</h3>
          ) : (
             <h3 className="text-center text-color">مکان مورد نظر را جستوجو کنید</h3>
          )}


        </div>
   )
       
    

}

export default Weather;