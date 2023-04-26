import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { images } from 'public/index';
import { TelegramIcon } from '../ui/icons/TelegramIcon';

import { colors } from '@/styles';

const SuccessfulMessage: React.FC = () => {
	const { ThumbsUp } = images;

	return (
		<StyledSuccessfulMessage>
			<Image src={ThumbsUp} alt="ThumbsUp" width={136} height={136} />
			<p>Thank you for registering!</p>
			<span>
				Please contact our manager via Telegram, indicating your email, which
				was used while registering
			</span>
			<StyledContactButton>
				<TelegramIcon />
				@ValorManager
			</StyledContactButton>
		</StyledSuccessfulMessage>
	);
};

const StyledContactButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	background-repeat: no-repeat;
	background-position: left;
	gap: 8px;
	padding: 9px 16px;
	font-size: 16px;
	line-height: 22px;
	letter-spacing: -3%;
	font-weight: 700;
	color: ${colors.black};
	border: none;
	background-color: ${colors.yellow};
	background-image: url('./images/SignUpBg.png');
	box-shadow: 0 -3px 0 0 rgba(228, 139, 4, 1) inset,
		0 1px 0 0 rgba(255, 255, 255, 0.6) inset, 0 10px 10px 0 rgba(6, 6, 40, 0.5);
	cursor: pointer;
	path {
		fill: black;
	}
`;

const StyledSuccessfulMessage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	p {
		max-width: 564px;
		font-size: 26px;
		font-weight: 800;
		line-height: 32px;
		color: ${colors.yellow};
		text-align: center;
	}
	span {
		max-width: 564px;
		font-size: 16px;
		line-height: 22px;
		color: ${colors.white};
		text-align: center;
		margin: 16px 0 32px;
	}
`;

export default SuccessfulMessage;
