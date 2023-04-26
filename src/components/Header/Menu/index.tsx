import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import FAQ from '@/components/FAQ';
import Navigation from './Navigation';
import Authentication from './Authentication';

import { images } from 'public/index.ts';

const Menu: React.FC = () => {
	const { Logo } = images;

	const [visible, setVisible] = useState<boolean>(false);

	return (
		<StyledMenu>
			<StyledNavMenu>
				<Image src={Logo} width={172} height={40} alt="ValorLogo" />
				<Navigation setVisible={setVisible} />
			</StyledNavMenu>
			<Authentication />
			{visible && <FAQ setVisible={setVisible} />}
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
