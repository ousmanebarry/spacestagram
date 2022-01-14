/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<div>
				<img src='/images/logo.png' width='50px' height='50px' alt='logo' />
				<h4>SPACESTAGRAM</h4>
			</div>
			<Link
				href='https://github.com/ousmanebarry/shopify-fe-intern-challlenge'
				className={styles.source_code}
			>
				<a target='_blank'>Source Code</a>
			</Link>
		</nav>
	);
}
