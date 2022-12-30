const axios = require("axios");

exports.handler = async function (event, context) {
	console.log(event);
	console.log(context);
	try {
		const { lat, lon } = event.queryStringParameters;
		const url = `${process.env.BASE_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`;

		const { data } = await axios.get(url);

		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (err) {
		return {
			statusCode: 404,
			body: err.toString(),
		};
	}
};
