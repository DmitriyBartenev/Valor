import React from 'react';
import styled from 'styled-components';

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
	h3 {
		margin-bottom: 48px;
		max-width: 410px;
	}
	padding: 120px 200px 0;
`;

const StyledPartnershipBox = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 24px;
`;

export default Partnership;
