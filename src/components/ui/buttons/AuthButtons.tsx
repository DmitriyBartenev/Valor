import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface AuthButtonsProps {
	children: ReactNode;
}

export const SignInButton: React.FC<AuthButtonsProps> = ({ children }) => {
	return <StyledSignInButton>{children}</StyledSignInButton>;
};

export const SignUpButton: React.FC<AuthButtonsProps> = ({ children }) => {
	return <StyledSignUpButton>{children}</StyledSignUpButton>;
};

const StyledAuthButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background-repeat: no-repeat;
	background-position: left;
	gap: 8px;
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
