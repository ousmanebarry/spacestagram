import styles from '../styles/Home.module.css';
import { useState, useRef } from 'react';
import Image from 'next/image';
import toast, { Toaster } from 'react-hot-toast';
import { Icon } from '@iconify/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function Card({ link, copyright, title, time, desc }) {
	const [readMore, setReadMore] = useState(false);
	const likeButton = useRef();
	const likeState = () => {
		likeButton.current.classList.toggle(styles.btn_like);
	};
	const shareLink = () =>
		toast.success('Copied to clipboard!', {
			position: 'bottom-center',
		});

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
						{readMore ? desc : `${desc.substring(0, 350)}...`}
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
					<CopyToClipboard text={link}>
						<Icon
							icon='fluent:share-ios-48-filled'
							width='35px'
							height='35px'
							className={styles.share_btn}
							onClick={shareLink}
						/>
					</CopyToClipboard>
					<Toaster />
				</div>
			</article>
		</>
	);
}
