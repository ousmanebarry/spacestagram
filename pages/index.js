import useSWR from 'swr';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
	const [count, setCount] = useState(10);
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, error } = useSWR(`/api/fetch?count=${count}`, fetcher);

	if (error) return <h1>Failed to load</h1>;
	if (!data) return <h1>Loading...</h1>;

	return (
		<h1>
			{data.data.map((el) => {
				return <p key={el.date}>{el.title}</p>;
			})}
		</h1>
	);
}
