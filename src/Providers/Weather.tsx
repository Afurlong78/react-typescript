import React, { useState, FC, createContext, PropsWithChildren, useEffect, useContext } from 'react';
import axios from 'axios'

interface WeatherObject {
    location: string;
    lat: number;
    lon: number;
    temperature: string;
}

interface WeatherInterface {
    location: string;
    temperature: number;
    getWeather?: ()=>void;
    search: string;
    setSearch: (value: string) => void;
}
  
export const WeatherContext = createContext<WeatherInterface>({
    location: "",
    temperature: 0,
    getWeather: ()=>{},
    search: "",
    setSearch: ()=>{},
});

export const useWeatherContext = () => {
    return useContext(WeatherContext);
};

export const WeatherProvider: FC<PropsWithChildren> = ({ children }) => {
    
    const [temperature, setTemperature]=useState(0);
    const [location, setLocation]=useState("");
    const [object, setObject]=useState< WeatherObject | null >(null);
    const [search, setSearch]=useState<string>("");

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=new york&units=imperial&appid=deb80c0a52040db9e3854194cfb3155e`)
            .then(response => {
                console.log(response)
                
                // setObject({
                //     location: response.data.name, 
                //     lat: response.data.coord.lat,
                //     lon: response.data.coord.lon,
                //     temperature: response.data.main.temp
                // })
                setTemperature(response.data.main.temp)
            
            })
            .catch(err=> console.log(err))
    }, [])

    const getWeather = () =>{
        console.log("hello")
    }

  const provider_state ={
    getWeather,
    location,
    temperature,
    search,
    setSearch,
  }

  return (
    <WeatherContext.Provider
      value={
        provider_state
      }
    >
      {children}
    </WeatherContext.Provider>
  );
};