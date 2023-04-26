import React from 'react';
import styled from 'styled-components';

import SocialItem from './SocialItem';

import { socialsItems } from '@/data/socialItems';
import { mq } from '@/styles';

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
	${mq[3]} {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}
`;

export default Socials;
