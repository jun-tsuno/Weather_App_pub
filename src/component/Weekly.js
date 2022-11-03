import React, { useState, useEffect } from "react";
import axios from "axios";
import { getIconImage } from "../helpers/GetIcon";
import { getDay, getDate, getHours, getMonth } from "../helpers/GetDate";

const Weekly = ({ cityInfo }) => {
    const [weekly, setWeekly] = useState([]);

    useEffect(() => {
        const getWeeklyData = async () => {
            const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${cityInfo.lat}&lon=${cityInfo.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

            const weeklyData = []
            for(let i = 5; i < data.list.length; i+=8) {
                const daily = [data.list[i], data.list[i+2], data.list[i+4]];
                const cleanArr = daily.filter(item => item !== undefined);
                if(cleanArr.length % 3 === 0) weeklyData.push(daily);
            }

            const newArr = weeklyData.map(day => {
                const dailyInfo = [];
                day.forEach(({ main, weather, dt }) => {
                    dailyInfo.push({icon: weather[0].icon, temp: main.temp, date: new Date(dt*1000)})
                })
                return dailyInfo;
            })
            return setWeekly(newArr);
        }
        getWeeklyData();
    },[cityInfo]);

    return (
        <div className="md:flex md:justify-around">
            {weekly.map((day, index1) => {
                return (
                    <React.Fragment>
                        <div key={index1} className="w-4/5 mx-auto md:w-48 mt-5  text-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl">
                            <div className="text-lg mt-2">
                                <span>{getDay(day[0].date)}</span>
                                <span className="mx-2">{getDate(day[0].date)}</span>
                                <span>{getMonth(day[0].date)}</span>
                            </div>
                            {day.map((hour, index2) => {
                                return (
                                        <React.Fragment>
                                            <div key={index2} className="flex justify-center items-center">
                                                <p>{getHours(hour.date)}</p>
                                                <img src={getIconImage(hour.icon)} alt='weather icon' className="w-14 mx-3"/>
                                                <p>{Math.round(hour.temp)} °C</p>
                                            </div>
                                        </React.Fragment>
                                );
                            })}
                        </div>
                    </React.Fragment>
                );
            })
            }
        </div>
    );
}


export default Weekly;