import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface NavButtonProps {
	children: ReactNode;
	active: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({ children, active }) => {
	return <StyledNavButton active={active}>{children}</StyledNavButton>;
};

const StyledNavButton = styled.button<NavButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${colors.white};
	border: ${({ active }) =>
		active ? `solid 1px ${colors.strokeObject}` : 'none'};
	background-color: ${({ active }) =>
		active ? colors.plateDark : 'transparent'};
	box-shadow: ${({ active }) =>
		active
			? '0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,0 1px 0 0 rgba(189, 189, 238, 0.15) inset,0 10px 10px 0 rgba(6, 6, 40, 0.55)'
			: 'none'};
	background-image: ${({ active }) =>
		active ? "url('./images/NavButtonBg.png')" : 'none'};
	border-radius: 4px;
	background-repeat: no-repeat;
	background-position: left;
	gap: 8px;
	padding: 9px 16px;
	font-size: 16px;
	font-weight: 400;
	line-height: 22px;
	letter-spacing: -3%;
	cursor: pointer;
`;
