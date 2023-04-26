import styled from 'styled-components';
import { colors } from '@/styles';

export const StyledCustomInput = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 4px;
	input {
		padding: 9px 16px;
		background-color: ${colors.plateDark};
		font-size: 16px;
		line-height: 22px;
		color: ${colors.light};
		border: solid 1px ${colors.strokeInput};
		border-radius: 4px;
		outline: none;
		::placeholder {
			color: ${colors.light};
		}
	}
`;
