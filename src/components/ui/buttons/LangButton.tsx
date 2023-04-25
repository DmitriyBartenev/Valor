import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface LangButtonProps {
	children: ReactNode;
	active: boolean;
}

export const LangButton: React.FC<LangButtonProps> = ({ children, active }) => {
	return <StyledLangButton active={active}>{children}</StyledLangButton>;
};

const StyledLangButton = styled.button<LangButtonProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ active }) =>
		active ? colors.plateDark : 'transparent'};
	background-image: ${({ active }) =>
		active ? "url('./images/LangButtonBg.png')" : 'none'};
	box-shadow: ${({ active }) =>
		active
			? '0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,0 1px 0 0 rgba(189, 189, 238, 0.15) inset,0 10px 10px 0 rgba(6, 6, 40, 0.55)'
			: 'none'};
	border: ${({ active }) =>
		active ? `solid 1px ${colors.strokeObject}` : 'none'};
	background-repeat: no-repeat;
	background-position-x: left;
	border-radius: 4px;
	padding: 9px;
	width: 40px;
	height: 40px;
	font-size: 13px;
	font-weight: 400;
	line-height: 18px;
	color: ${colors.white};
	cursor: pointer;
`;
