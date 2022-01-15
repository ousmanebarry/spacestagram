/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<div>
				<img src='/images/logo.png' width='50px' height='50px' alt='logo' />
				<h2>SPACESTAGRAM</h2>
			</div>
		</nav>
	);
}
