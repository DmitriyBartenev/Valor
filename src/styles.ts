import { createGlobalStyle } from 'styled-components';

const breakpoints = [430, 1200, 1440, 1680];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const colors = {
	black: '#000000',
	white: '#FFFFFF',
	back: '#10102F',
	light: '#8989AA',
	yellow: '#FCB223',
	plateDark: 'rgba(3, 3, 31, 0.6)',
	plateLight: 'rgba(33, 33, 66, 0.6)',
	strokeObject: 'rgba(184, 184, 227, 0.08)',
	strokeInput: 'rgba(184, 184, 227, 0.25)',
	superDark: '#06061F',
	faqSuperDark: 'rgba(6, 6, 31, 0.97)',
	errorRed: '#FF5454',
};

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Mulish', sans-serif;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	body{
		background-color: ${colors.back};
		color: ${colors.white};
	}
	h1, h2, h3, h4, h5, h6{
		margin: 0;
	}
	h1{
		font-weight: 800;
		font-size: 96px;
		line-height: 96px;
	}
	h3{
		font-weight: 800;
		font-size: 46px;
		line-height: 48px;
	}
	a{
		text-decoration: none;
		color: inherit;
	}
`;

export default GlobalStyle;
