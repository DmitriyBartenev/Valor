import React, { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/styles';
import { icons } from 'public/index';

interface AuthButtonsProps {
	children: ReactNode;
}

const { SignIn, SignUp } = icons;

export const SignInButton: React.FC<AuthButtonsProps> = ({ children }) => {
	return (
		<StyledSignInButton>
			<Image src={SignIn} alt="AuthIcon" width={16} height={16} />
			{children}
		</StyledSignInButton>
	);
};

export const SignUpButton: React.FC<AuthButtonsProps> = ({ children }) => {
	return (
		<StyledSignUpButton>
			<Image src={SignUp} alt="AuthIcon" width={18} height={18} />
			{children}
		</StyledSignUpButton>
	);
};

const StyledAuthButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background-repeat: no-repeat;
	background-position: left;
	gap: 8px;
	max-height: 40px;
	min-width: 130px;
	padding: 9px 16px;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: -3%;
	font-weight: 700;
	cursor: pointer;
`;

const StyledSignInButton = styled(StyledAuthButton)`
	color: ${colors.white};
	border: solid 1px ${colors.strokeObject};
	background-color: ${colors.plateDark};
	background-image: url('./images/NavButtonBg.png');
	box-shadow: 0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,
		0 1px 0 0 rgba(189, 189, 238, 0.15) inset,
		0 10px 10px 0 rgba(6, 6, 40, 0.55);
`;

const StyledSignUpButton = styled(StyledAuthButton)`
	color: ${colors.black};
	border: none;
	background-color: ${colors.yellow};
	background-image: url('./images/SignUpBg.png');
	box-shadow: 0 -3px 0 0 rgba(228, 139, 4, 1) inset,
		0 1px 0 0 rgba(255, 255, 255, 0.6) inset, 0 10px 10px 0 rgba(6, 6, 40, 0.5);
`;
