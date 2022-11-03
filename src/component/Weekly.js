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

            // let weeklyData = [];
            // let temp = [];
            // const pattern = [2, 3, 3];

                //--- 　備忘　---
                //---  temp[]
                //---  temp[data.list[5]]
                //---  temp[lastIndex=0] = data.list[5], temp[lastIndex].index = 5
                //---   (x.index = indexにてlistdata各々のindexプロパティを追加、現在ループしているindexに合わせる)
                //---  pattern[lastIndex=0]= 2  (足し算のパターンを配列に格納しておく)
                //---  index(現在ループしている配列のindex) = 新たに追跡しているindex なら、tempにpushする。
                //---  temp[data.list[5], data.list[7]]

            // data.list.forEach((x, index) => {
            //     if (index < 5) return
            //     if (index === 5) {
            //         x.index = index;
            //         temp.push(x)
            //     }

            //     const lastIndex = temp.length - 1;

                //--- 　備忘　---
                //---  pattern = [2, 3, 3]
                //---  data.list[7] = 5 + "2", data.list[10] = 7 + "3", data.list[13] = 10 + "3"
                //---  temp[data.list[5], data.list[7], data.list[10], data.list[13]]
                //---  temp.pop() = data.list[13] ---> ※ pop()された後、元の配列は最後の要素が取り除かれた後の配列になる。
                //---  temp = [data.list[5], data.list[7], data.list[10]]
                //---  weeklyData = [ [data.list[5], data.list[7], data.list[10]] ]
                //---  temp = [data.list[13]] --->　初期化

            //     if (index === (temp[lastIndex].index + pattern[lastIndex])) {
            //         x.index = index;
            //         temp.push(x)
            //     }

            //     if (temp.length % 4 === 0) {
            //         const popped = temp.pop();
            //         weeklyData.push(temp);
            //         temp = [popped];
            //     }
            // });

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