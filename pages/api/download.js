import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);

const handler = async (req, res) => {
	const {
		query: { url },
	} = req;

	const response = await fetch(url);
	if (!response.ok)
		throw new Error(`unexpected response ${response.statusText}`);

	res.setHeader('Content-Disposition', 'attachment; filename=file');
	await pipeline(response.body, res);
};

export default handler;
