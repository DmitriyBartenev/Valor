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

	const toggleFAQModal = () => {
		if (visible) {
			setVisible(false);
			document.body.style.overflow = 'visible';
		} else {
			setVisible(true);
			document.body.style.overflow = 'hidden';
		}
	};

	return (
		<StyledMenu>
			<StyledNavMenu>
				<Image src={Logo} width={172} height={40} alt="ValorLogo" />
				<Navigation toggleFAQModal={toggleFAQModal} />
			</StyledNavMenu>
			<Authentication />
			{visible && <FAQ toggleFAQModal={toggleFAQModal} />}
		</StyledMenu>
	);
};

const StyledMenu = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
`;

const StyledNavMenu = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 64px;
	@media screen and (max-width: 840px) {
		display: none;
	}
`;

export default Menu;
