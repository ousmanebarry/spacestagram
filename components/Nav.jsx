/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Nav({ go_home }) {
	return (
		<nav className={styles.nav}>
			<div>
				<img src='/images/logo.png' width='40px' height='40px' alt='logo' />
				<h2>SPACE</h2>
			</div>
			{go_home ? (
				<Link href='/'>
					<a>Go Home</a>
				</Link>
			) : null}
		</nav>
	);
}
