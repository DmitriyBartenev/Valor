import styled from 'styled-components';
import { colors } from '@/styles';

export const StyledCustomInput = styled.div<{ error: string | undefined }>`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
	position: relative;
	input {
		width: 100%;
		padding: 9px 16px;
		background-color: ${colors.plateDark};
		font-size: 16px;
		line-height: 22px;
		color: ${colors.light};
		border: solid 1px
			${({ error }) => (error ? colors.errorRed : colors.strokeInput)};
		border-radius: 4px;
		outline: none;
		::placeholder {
			color: ${colors.light};
		}
	}
`;

export const StyledErrorMessage = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	margin-bottom: 3px;
	padding: 2px 6px;
	background-color: ${colors.errorRed};
	font-size: 12px;
	line-height: 16px;
	border-radius: 4px 4px 0 4px;
`;
