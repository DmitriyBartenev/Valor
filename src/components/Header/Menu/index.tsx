import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import Navigation from './Navigation';
import Authentication from './Authentication';

import { images } from 'public/index.ts';

const Menu: React.FC = () => {
	const { Logo } = images;

	return (
		<StyledMenu>
			<StyledNavMenu>
				<Image src={Logo} width={172} height={40} alt="ValorLogo" />
				<Navigation />
			</StyledNavMenu>
			<Authentication />
		</StyledMenu>
	);
};

const StyledMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledNavMenu = styled.div`
	display: flex;
	align-items: center;
	gap: 64px;
`;

export default Menu;
