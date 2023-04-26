import React from 'react';
import styled from 'styled-components';
import { mq } from '@/styles';

import {
	SignUpButton,
	SignInButton,
} from '@/components/ui/buttons/AuthButtons';

const Authentication: React.FC = () => {
	return (
		<StyledAuthentication>
			<SignInButton>Sign In</SignInButton>
			<SignUpButton>Sign Up</SignUpButton>
		</StyledAuthentication>
	);
};

const StyledAuthentication = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
	@media screen and (max-width: 840px) {
		justify-content: center;
		width: 100%;
	}
	${mq[0]} {
		flex-wrap: wrap;
	}
`;

export default Authentication;
