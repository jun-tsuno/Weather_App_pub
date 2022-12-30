import { useState, useEffect } from "react";

const useCurrent = (cityInfo) => {
	const [current, setCurrent] = useState(
		{
			temp: "",
			weather: "",
			weatherId: "",
			icon: "",
			max: "",
			min: "",
			feel: "",
			humid: "",
			time: "",
		},
		[cityInfo]
	);
	const lat = cityInfo.lat;
	const lon = cityInfo.lon;

	useEffect(() => {
		const getCurrent = async () => {
			const url = `/.netlify/functions/getCurrent?lat=${lat}&lon=${lon}`;

			const data = await fetch(url).then((response) => response.json());
			setCurrent({
				temp: Math.round(data.main.temp),
				weather: data.weather[0].main,
				weatherId: data.weather[0].id,
				icon: data.weather[0].icon,
				max: Math.round(data.main.temp_max),
				min: Math.round(data.main.temp_min),
				feel: Math.round(data.main.feels_like),
				humid: data.main.humidity,
				time: new Date(data.dt * 1000).toLocaleString(),
			});
		};
		getCurrent();
	}, [cityInfo]);

	return [current];
};

export default useCurrent;
