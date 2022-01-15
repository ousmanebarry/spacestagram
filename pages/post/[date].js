import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Nav from '../../components/Nav';
import Error from '../../components/Error';

export default function Post() {
	const router = useRouter();
	const { date } = router.query;
	const [res, setRes] = useState(null);
	const [err, setErr] = useState(null);
	const noImageLink =
		'http://www.dermalina.com/wp-content/uploads/2020/12/no-image.jpg';

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`/api/posts?date=${date}`);
				const data = await response.json();
				setRes(data);
				console.log(data);
			} catch (error) {
				setErr(error);
				return error;
			}
		};

		fetchData();
	}, [date]);

	if (!res) return <Loading />;

	if (err) return <Error />;

	return (
		<div className={styles.main}>
			<Nav />
			{res.map((obj) => {
				return (
					<Card
						key={obj.id}
						link={obj.picture || noImageLink}
						copyright={obj.copyright}
						title={obj.title}
						time={obj.date}
						desc={obj.explanation}
					/>
				);
			})}
		</div>
	);
}
