import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import {
	SignUpButton,
	SignInButton,
} from '@/components/ui/buttons/AuthButtons';

import { icons } from 'public/index';

const Authentication: React.FC = () => {
	const { SignIn, SignUp } = icons;

	return (
		<StyledAuthentication>
			<SignInButton>
				<Image src={SignIn} alt="AuthIcon" width={16} height={16} />
				Sign In
			</SignInButton>
			<SignUpButton>
				<Image src={SignUp} alt="AuthIcon" width={18} height={18} />
				Sign Up
			</SignUpButton>
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
