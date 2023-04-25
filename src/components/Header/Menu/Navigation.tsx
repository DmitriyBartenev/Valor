import React from 'react';
import styled from 'styled-components';

import NavigationItem from './NavigationItem';

import { navigationItems } from '@/data/navigationItems';

const Navigation: React.FC = () => {
	return (
		<StyledNavigation>
			{navigationItems.map((navItem) => (
				<NavigationItem key={navItem.id} {...navItem} />
			))}
		</StyledNavigation>
	);
};

const StyledNavigation = styled.nav`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;
`;

export default Navigation;
