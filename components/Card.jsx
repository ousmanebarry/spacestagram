import styles from '../styles/Home.module.css';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Card({ link, copyright, title, time, desc }) {
	const [readMore, setReadMore] = useState(false);
	const [liked, setLiked] = useState(false);
	const likeButton = useRef();
	const likeState = () => {
		if (liked) {
			setLiked(false);
			likeButton.current.classList.remove('like_animation');
			console.log(likeButton.current);
		} else {
			setLiked(true);
			likeButton.current.classList.add('like_animation');
			console.log(likeButton.current);
		}
	};

	return (
		<>
			<article className={styles.container}>
				<div className={styles.picture_container}>
					<Image
						priority
						blurDataURL={link}
						placeholder='blur'
						src={link}
						width='650px'
						height='500px'
						className={styles.picture}
						alt={copyright}
					/>
				</div>
				<div className={styles.text_container}>
					<h1>{title}</h1>
					<time>{time}</time>
					<p>
						{readMore ? desc : `${desc.substring(0, 400)}...`}
						<button
							className={styles.button}
							onClick={() => setReadMore(!readMore)}
						>
							{readMore ? 'show less' : 'read more'}
						</button>
					</p>
				</div>
				<div className={styles.buttons_container}>
					<Icon
						icon='akar-icons:heart'
						width='30px'
						height='30px'
						className={styles.like_btn}
						onClick={likeState}
						ref={likeButton}
					/>
				</div>
			</article>
		</>
	);
}
