import { useState, useEffect } from 'react';
import axios from 'axios';

const useCurrent = (cityInfo) => {
    const [current, setCurrent] = useState({
        temp: '',
        weather: '',
        weatherId:'',
        icon: '',
        max: '',
        min: '',
        feel: '',
        humid: '',
        time: ''
    }, [cityInfo]);

    useEffect(() => {
        const getCurrent = async () => {
            const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
            setCurrent({
                temp: Math.round(data.main.temp),
                weather: data.weather[0].main,
                weatherId: data.weather[0].id,
                icon: data.weather[0].icon,
                max: Math.round(data.main.temp_max),
                min: Math.round(data.main.temp_min),
                feel: Math.round(data.main.feels_like),
                humid: data.main.humidity,
                time: new Date(data.dt * 1000).toLocaleString()
            });
        }
        getCurrent();
    }, [cityInfo]);

    return [current];

};

export default useCurrent;