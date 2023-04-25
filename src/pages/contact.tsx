import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Valor App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<h1>ContactPage</h1>
			</main>
		</>
	);
}
