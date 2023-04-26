import Head from 'next/head';
import styled from 'styled-components';
import { mq } from '@/styles';

import Header from '@/components/Header';
import Main from '@/components/Main';
import Partnership from '@/components/Partnership';
import Meeting from '@/components/Meeting';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Valor</title>
				<meta name="description" content="Valor App" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StyledTopBg>
				<Header />
				<Main />
				<Partnership />
			</StyledTopBg>
			<StyledBottomBg>
				<Meeting />
				<Footer />
			</StyledBottomBg>
		</>
	);
}

const StyledTopBg = styled.div`
	background-image: url('./images/TopBg.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

const StyledBottomBg = styled.div`
	background-image: url('./images/BottomBg.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
