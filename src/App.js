import React, { useState, useEffect } from "react";
import SearchBar from "./component/SearchBar";
import DashBoard from "./component/DashBoard";
import Weekly from "./component/Weekly";
import Error from "./component/Error";
import useCity from "./Hooks/useCity";
import useCurrent from "./Hooks/useCurrent";
import { getBackground } from "./helpers/GetBackground";

const App = () => {
    const [background, setBackground] = useState();
    const [err, cityInfo, getCityName] = useCity();
    const [current] = useCurrent(cityInfo);

    useEffect(()=> {
        setBackground(getBackground(current.weatherId));
    }, [current])

    const isHidden = (err) => {
        if(err){ return 'hidden'}else{ return ''};
    };

    return(
        <div className={`h-full md:h-screen w-screen text-white bg-no-repeat bg-fixed bg-cover  ${background} font-fancy`}>
            <div className='w-80 md:w-96 mx-auto pt-10 '>
                <SearchBar  getCityName={getCityName}/>
            </div>
            <div className={isHidden(err)}>
                <DashBoard cityInfo={cityInfo} current={current} />
            </div>
            <div className={`max-w-4xl mx-auto pb-10 sm:mt-10 ${isHidden(err)}`}>
                <Weekly cityInfo={cityInfo}/>
            </div>
            <div className={`h-screen md:h-full mt-7 sm:mt-10 ${isHidden(!err)}`}>
                <Error />
            </div>
        </div>
    );
};

export default App;

