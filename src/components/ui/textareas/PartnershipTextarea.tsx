import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';
import { CustomFileInput } from '../inputs/CustomFileInput';

interface PartnershipTextareaProps {
	placeholder: string;
	label: string;
	id: string;
}

export const PartnershipTextarea: React.FC<PartnershipTextareaProps> = ({
	placeholder,
	label,
	id,
}) => {
	return (
		<StyledPartnershipTextarea>
			<StyledContainer>
				<label htmlFor={id}>{label}</label>
				<CustomFileInput />
			</StyledContainer>
			<textarea placeholder={placeholder} id={id} />
		</StyledPartnershipTextarea>
	);
};

const StyledPartnershipTextarea = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	textarea {
		background-color: ${colors.plateDark};
		width: 100%;
		height: 74px;
		resize: none;
		padding: 9px 16px;
		font-size: 16px;
		line-height: 22px;
		color: ${colors.light};
		border: solid 1px ${colors.strokeInput};
		border-radius: 4px;
		outline: none;
	}
`;

const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
