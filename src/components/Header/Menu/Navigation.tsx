import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';

import { navigationItems } from '@/data/navigationItems';

import { colors } from '@/styles';

interface NavigationProps {
	toggleFAQModal: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ toggleFAQModal }) => {
	return (
		<StyledNavigation>
			{navigationItems.map((navItem) => (
				<NavigationItem key={navItem.id} {...navItem} />
			))}
			<StyledShowFAQ onClick={toggleFAQModal}>F.A.Q.</StyledShowFAQ>
		</StyledNavigation>
	);
};

const StyledNavigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`;

const StyledShowFAQ = styled.button`
	background-color: transparent;
	border: solid 1px transparent;
	border-radius: 4px;
	font-size: 16px;
	line-height: 22px;
	color: ${colors.white};
	cursor: pointer;
	padding: 9px 16px;
	:hover {
		border: solid 1px rgba(252, 178, 35, 0.2);
	}
`;

export default Navigation;
