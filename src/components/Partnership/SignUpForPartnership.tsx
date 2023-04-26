import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

import Agreement from './Agreement';
import BusinessDropdown from '../ui/dropdowns/BusinessDropdown';
import { SignUpButton } from '../ui/buttons/AuthButtons';
import { PartnershipInput } from '../ui/inputs/PartnershipInput';
import { PartnershipTextarea } from '../ui/textareas/PartnershipTextarea';
import { CustomPasswordInput } from '../ui/inputs/CustomPasswordInput';

const SignUpForPartnership: React.FC = () => {
	return (
		<StyledSignUpForPartnership>
			<StyledInputContainer>
				<PartnershipInput
					label="Email"
					placeholder="Enter your Email"
					type="email"
					id="email"
				/>
				<CustomPasswordInput
					label="Password"
					placeholder="Enter your Password"
					id="password"
				/>
			</StyledInputContainer>
			<StyledInputContainer>
				<BusinessDropdown
					label="Your Business"
					placeholder="Select one or more"
				/>
				<PartnershipInput
					label="Your Telegram Account"
					placeholder="Enter your Telegram"
					type="text"
					id="telegram"
				/>
			</StyledInputContainer>
			<PartnershipTextarea
				placeholder=". . ."
				label="Tell about Your results"
				id="results"
			/>
			<StyledConfirm>
				<Agreement
					id="policy"
					label="I have read and agree to the Terms & Coditions"
				/>
				<SignUpButton>Sign Up</SignUpButton>
			</StyledConfirm>
		</StyledSignUpForPartnership>
	);
};

const StyledSignUpForPartnership = styled.form`
	width: 100%;
	height: fit-content;
	background-image: url('./images/PartnershipFormBg.png');
	background-repeat: no-repeat;
	background-position: left;
	background-size: contain;
	background-color: ${colors.plateLight};
	box-shadow: 0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,
		0 1px 0 0 rgba(189, 189, 238, 0.15) inset,
		0 10px 10px 0 rgba(6, 6, 40, 0.55);
	border-radius: 4px;
	border: solid 1px ${colors.strokeObject};
	padding: 32px;
	label {
		font-size: 13px;
		line-height: 18px;
		color: ${colors.light};
		margin-left: 4px;
	}
`;

const StyledConfirm = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 24px;
`;

const StyledInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 16px;
	gap: 16px;
`;

export default SignUpForPartnership;
