import { useEffect, useState, createContext } from 'react';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

export default function Home() {
	const count = 21;
	const [res, setRes] = useState(null);
	const [err, setErr] = useState(null);

	useEffect(() => {
		const dev = process.env.NODE_ENV !== 'production';
		const server = dev
			? 'http://localhost:3000'
			: 'https://shopify-fe-challenge.ousmanebarry.ca';

		const fetchData = async () => {
			try {
				const response = await fetch(`${server}/api/fetch?count=${count}`);
				const data = await response.json();
				setRes(data);
			} catch (error) {
				setErr(error);
				return error;
			}
		};

		fetchData();
	}, [count]);

	if (!res) return <h1>Loading...</h1>;

	if (err) return <h1>There was an error. Please reload.</h1>;

	return res.map((obj) => {
		return (
			<Card
				key={obj.id}
				link={obj.picture}
				copyright={obj.copyright}
				title={obj.title}
				time={obj.time}
				desc={obj.explanation}
			/>
		);
	});
}
