import React, { useState } from 'react';
import styled from 'styled-components';

import { DropdownIcon } from '../icons/DropdownIcon';

import { colors } from '@/styles';
import { CustomCheckbox } from '../inputs/CustomCheckbox';

interface BusinessDropdownProps {
	label: string;
	placeholder: string;
}

const BusinessDropdown: React.FC<BusinessDropdownProps> = ({
	label,
	placeholder,
}) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<StyledDropdownBox>
			<label>{label}</label>
			<StyledBusinessDropdown visible={visible}>
				<StyledDropdownTitle onClick={() => setVisible((prev) => !prev)}>
					<p>{placeholder}</p>
					<DropdownIcon visible={visible} />
				</StyledDropdownTitle>
				<ul>
					<li>
						<CustomCheckbox id="breeding" />
						<label htmlFor="breeding">Chicken Breeding</label>
					</li>
					<li>
						<CustomCheckbox id="actor" />
						<label htmlFor="actor">Female Voice Actor</label>
					</li>
					<li>
						<CustomCheckbox id="promoter" />
						<label htmlFor="promoter">Parrot-Costume Promoter</label>
					</li>
				</ul>
			</StyledBusinessDropdown>
		</StyledDropdownBox>
	);
};

const StyledDropdownBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
	color: ${colors.light};
	position: relative;
	label {
		font-size: 13px;
		line-height: 18px;
		margin-left: 4px;
	}
`;

const StyledBusinessDropdown = styled.div<{ visible: boolean }>`
	font-size: 16px;
	line-height: 22px;
	padding: 9px 16px;
	background-color: ${colors.plateDark};
	border: solid 1px ${colors.strokeInput};
	border-radius: 4px;
	label {
		font-size: 16px !important;
		margin-left: 0 !important;
	}
	ul {
		list-style: none;
		position: absolute;
		width: 100%;
		left: 0;
		top: 100%;
		background-color: ${colors.superDark};
		padding: 16px;
		margin-top: 4px;
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		gap: 12px;
		visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
		li {
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
`;

const StyledDropdownTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`;

export default BusinessDropdown;
