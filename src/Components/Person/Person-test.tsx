import React, {FC, useState, ChangeEvent, useEffect, MouseEvent } from 'react';
import axios from 'axios';
import { useWeatherContext } from '../../Providers/Weather';

export enum HairColor {
    blonde = "Your hair is blonde",
    brown = "your hair is brown",
    pink = "your hair is pink",
}

interface Props {
    name: string; 
    age: number;
    hungry: boolean;
    hairColor: HairColor;
}

const PersonTest:FC<Props> = ({name, age, hungry, hairColor }) =>{
    const {
        location,
        temperature,
        getWeather,
        search,
        setSearch,
    }=useWeatherContext();

    const handleInput = (event: ChangeEvent<HTMLInputElement>) =>{
        setSearch(event.target.value)
    }

    return(
        <div>
            <input placeholder='type your location'onChange={handleInput}/>
            <button >Get weather</button>
            {temperature}
        </div>
    )
}

export default PersonTest;