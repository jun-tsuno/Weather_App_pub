const axios = require("axios");

exports.handler = async function (event, context) {
	console.log(event);
	console.log(context);

	try {
		const { term } = event.queryStringParameters;
		const url = `${process.env.BASE_URL}/geo/1.0/direct?q=${term}&appid=${process.env.API_KEY}`;

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
