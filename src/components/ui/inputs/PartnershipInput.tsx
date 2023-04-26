import React from 'react';
import { FieldValues } from 'react-hook-form';
import { StyledCustomInput, StyledErrorMessage } from './styles';

interface PartnershipInputProps {
	placeholder: string;
	label: string;
	type: string;
	id: string;
	register: FieldValues;
	error: string | undefined;
}

export const PartnershipInput: React.FC<PartnershipInputProps> = ({
	label,
	placeholder,
	type,
	id,
	register,
	error,
}) => {
	return (
		<StyledCustomInput error={error}>
			<label htmlFor={id}>{label}</label>
			<input type={type} placeholder={placeholder} id={id} {...register} />
			{error && <StyledErrorMessage>{error}</StyledErrorMessage>}
		</StyledCustomInput>
	);
};
