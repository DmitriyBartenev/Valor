import Header from '@/components/Header';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Benefits</title>
				<meta name="description" content="Valor App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<h1>BenefitsPage</h1>
			</main>
		</>
	);
}
