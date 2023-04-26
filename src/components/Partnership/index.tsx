import React from 'react';
import styled from 'styled-components';
import { mq } from '@/styles';

import Services from './Services';
import SignUpForPartnership from './SignUpForPartnership';

const Partnership: React.FC = () => {
	return (
		<StyledPartnership>
			<h3>Become a Partner and Get:</h3>
			<StyledPartnershipBox>
				<Services />
				<SignUpForPartnership />
			</StyledPartnershipBox>
		</StyledPartnership>
	);
};

const StyledPartnership = styled.section`
	padding: 120px 200px 0;
	h3 {
		margin-bottom: 48px;
		max-width: 410px;
	}
	${mq[3]} {
		padding: 96px 120px 0;
	}
	${mq[2]} {
		padding: 96px 96px 0;
	}
	${mq[1]} {
		padding: 32px 16px 0;
	}
`;

const StyledPartnershipBox = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 24px;
	${mq[2]} {
		flex-direction: column;
	}
	${mq[1]} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export default Partnership;
