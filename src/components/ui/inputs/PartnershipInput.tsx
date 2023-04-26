import React from 'react';
import { StyledCustomInput } from './styles';

interface PartnershipInputProps {
	placeholder: string;
	label: string;
	type: string;
	id: string;
}

export const PartnershipInput: React.FC<PartnershipInputProps> = ({
	label,
	placeholder,
	type,
	id,
}) => {
	return (
		<StyledCustomInput>
			<label htmlFor={id}>{label}</label>
			<input type={type} placeholder={placeholder} id={id} />
		</StyledCustomInput>
	);
};
