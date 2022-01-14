export default async function handler(req, res) {
	const {
		query: { count },
	} = req;

	const url = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&count=${count}`;

	try {
		const data = await fetch(url);
		const response = await data.json();

		res.status(200).json(
			response.map((element, index) => {
				return {
					id: index,
					date: element.date,
					explanation: element.explanation,
					picture: element.url || element.hdurl,
					title: element.title,
					copyright: element.copyright,
				};
			})
		);
	} catch (error) {
		res.status(400).json(error);
	}
}
