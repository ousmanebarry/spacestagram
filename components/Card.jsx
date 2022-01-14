import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Image from 'next/image';

export default function Card({ link, copyright, title, time, desc }) {
	const [readMore, setReadMore] = useState(false);

	return (
		<>
			<article className={styles.container}>
				<div className={styles.picture_container}>
					<Image
						src={link}
						width='500px'
						height='500px'
						className={styles.picture}
						alt={copyright}
					/>
				</div>
				<div className={styles.text_container}>
					<h1>{title}</h1>
					<time>{time}</time>
					<p>{readMore ? desc : `${desc.substring(0, 400)}...`}</p>
					<button
						className={styles.button}
						onClick={() => setReadMore(!readMore)}
					>
						{readMore ? 'Show less' : 'Read more'}
					</button>
				</div>
			</article>
		</>
	);
}
