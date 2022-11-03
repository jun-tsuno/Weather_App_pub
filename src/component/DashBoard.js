import React from "react";
import DetailInfo from "./DetailInfo";
import { getIconImage } from "../helpers/GetIcon";

const DashBoard = ({ current, cityInfo }) => {

    return (
        <div className="mt-6 sm:mt-14">
            <div className="md:max-w-4xl md:flex justify-around w-4/5 my-0 mx-auto p-4 md:p-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] backdrop-blur-3xl ">
                    <div className="flex  md:flex md:float-left">
                        <div className="flex-col">
                            <h1 className="text-center text-3xl">{cityInfo.name}</h1>
                            <p className="text-center">{cityInfo.country}</p>
                            <p className="text-center ml-3">{current.time}</p>
                            <img src={getIconImage(current.icon)} alt="weather icon" className="w-28 h-auto m-auto"/>
                        </div>
                        <div className="self-end md:flex-col md:ml-3">
                            <div className="text-3xl md:inline md:text-5xl">{current.temp} <span className="text-2xl md:text-3xl">°C</span></div>
                            <p className="mt-1 mb-5  md:text-2xl md:text-center">{current.weather}</p>
                        </div>
                    </div>
                    <div className="md:w-2/5 md:max-w-xs md:ml-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] flex justify-evenly">
                        <DetailInfo current={current} />
                    </div>
            </div>
        </div>
    );
};

export default DashBoard;