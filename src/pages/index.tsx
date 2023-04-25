import GlobalStyle from '@/styles';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Valor</title>
				<meta name="description" content="Valor App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyle />
			<main>
				<p>Hello World!</p>
			</main>
		</>
	);
}
