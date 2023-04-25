import { createGlobalStyle } from 'styled-components';

const breakpoints = [430, 1200, 1440, 1680];
export const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const colors = {
	back: '#10102F',
	white: '#FFFFFF',
	light: '#8888A6',
	yellow: '#FCB223',
};

const GlobalStyle = createGlobalStyle`
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
	}
	body{
		font-family: 'Mulish', sans-serif;
		background-color: ${colors.back};
		color: ${colors.white};
	}
	h1, h2, h3, h4, h5, h6{
		margin: 0;
	}
	h1{
		font-weight: 800;
		font-size: 96px;
		line-height: 96;
	}
	h3{
		font-weight: 800;
		font-size: 46px;
		line-height: 48;
	}
`;

export default GlobalStyle;
