import React from 'react';
import styled from 'styled-components';

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
	align-items: center;
	justify-content: space-between;
	padding: 48px;
	gap: 48px;
`;

export default Header;
