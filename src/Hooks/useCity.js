import { useState } from "react";
import axios from "axios";

const useCity = () => {
    const [err, setErr] = useState(false);
    const [cityInfo, setCityInfo] = useState({
        lat: 49.2608724,
        lon: -123.113952,
        name: 'Vancouver',
        country: 'CA'
    })

    const getCityName = async (term) => {
        try {
                const { data } = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&appid=${process.env.REACT_APP_API_KEY}`);
                setCityInfo({
                    lat: data[0].lat,
                    lon: data[0].lon,
                    name: data[0].name,
                    country: data[0].country
                })
                setErr(false);
            } catch (error) {
                console.log(error);
                setErr(true);
            }
        }

        return [err, cityInfo, getCityName];
};

export default useCity;