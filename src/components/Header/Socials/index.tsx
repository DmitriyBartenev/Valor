import React from 'react';
import styled from 'styled-components';

import SocialItem from './SocialItem';

import { socialsItems } from '@/data/socialItems';

const Socials: React.FC = () => {
	return (
		<StyledSocials>
			{socialsItems.map((socialItem) => (
				<SocialItem key={socialItem.id} {...socialItem} />
			))}
		</StyledSocials>
	);
};

const StyledSocials = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`;

export default Socials;
