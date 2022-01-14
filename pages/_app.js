import '../styles/globals.css';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<React.Fragment>
			<Head>
				<title>Spacestagram</title>
				<link rel='icon' href='/images/favicon.ico' />
				<meta
					name='description'
					content='A website that fetches data from the NASA Astronomy Picture of the Day and displays it for the user'
				/>
				<meta name='author' content='Ousmane Barry' />
			</Head>
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
