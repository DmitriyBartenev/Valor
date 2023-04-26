import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface CustomCheckboxProps {
	id: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id }) => {
	return <StyledCustomCheckbox type="checkbox" id={id} />;
};

const StyledCustomCheckbox = styled.input`
	position: absolute;
	z-index: -1;
	opacity: 0;
	+ label {
		display: inline-flex;
		align-items: center;
		user-select: none;
		cursor: pointer;
	}
	+ label::before {
		content: '';
		display: inline-block;
		width: 24px;
		height: 24px;
		flex-shrink: 0;
		flex-grow: 0;
		border: 1px solid ${colors.strokeInput};
		border-radius: 4px;
		margin-right: 8px;
		background-repeat: no-repeat;
		background-position: center center;
		background-size: 50% 50%;
	}
	:checked + label::before {
		background-image: url('./images/ActiveCheckbox.png');
	}
`;
