import React from 'react';
import styled from 'styled-components';
import { mq } from '@/styles';

import Languages from './Languages';
import Menu from './Menu';
import Socials from './Socials';

const Header: React.FC = () => {
	return (
		<StyledHeader>
			<Languages />
			<Menu />
			<Socials />
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding: 48px;
	gap: 48px;
	${mq[1]} {
		padding: 28px;
	}
	${mq[0]} {
		padding: 12px;
	}
`;

export default Header;
