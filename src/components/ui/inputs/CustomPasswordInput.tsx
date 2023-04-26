import React, { useState } from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

import { StyledCustomInput } from './styles';
import { ShowPasswordIcon } from '../icons/ShowPasswordIcon';

interface CustomPasswordInputProps {
	label: string;
	id: string;
	placeholder: string;
}

export const CustomPasswordInput: React.FC<CustomPasswordInputProps> = ({
	id,
	label,
	placeholder,
}) => {
	const [type, setType] = useState<'password' | 'text'>('password');

	return (
		<StyledCustomInput>
			<label htmlFor={id}>{label}</label>
			<StyledCustomPasswordInputBox>
				<input type={type} placeholder={placeholder} id={id} />
				<StyledShowPasswordBox type={type}>
					<button
						type="button"
						onClick={() =>
							setType((prev) =>
								prev === 'password' ? (prev = 'text') : (prev = 'password')
							)
						}
					>
						<ShowPasswordIcon />
					</button>
				</StyledShowPasswordBox>
			</StyledCustomPasswordInputBox>
		</StyledCustomInput>
	);
};

const StyledCustomPasswordInputBox = styled.div`
	width: 100%;
	position: relative;
	input {
		width: 100%;
		padding-right: 50px;
	}
`;

const StyledShowPasswordBox = styled.div<{ type: 'password' | 'text' }>`
	height: 100%;
	position: absolute;
	right: 16px;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		background-color: transparent;
		border: none;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 4px;
		cursor: pointer;
		svg {
			path {
				opacity: ${({ type }) => (type === 'password' ? '0.3' : '1')};
				fill: ${({ type }) =>
					type === 'password' ? colors.light : colors.yellow};
			}
		}
	}
`;
