import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	const dev = process.env.NODE_ENV !== 'production';
	const server = dev
		? 'http://localhost:3000'
		: 'https://shopify-fe-challenge.ousmanebarry.ca';

	fetch(`${server}/api/fetch?count=5`, {
		headers: {
			Accept: 'application/json',
		},
	})
		.then((res) => res)
		.then((data) => {
			console.log(data.json());
		})
		.catch((err) => {
			console.log(err);
		});

	return <h1>Spacestagram</h1>;
}
