import React from 'react';
import styled from 'styled-components';

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
`;

export default Authentication;
