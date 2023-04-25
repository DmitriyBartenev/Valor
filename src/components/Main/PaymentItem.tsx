import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface PaymentItemProps {
	src: StaticImageData;
	height: number;
	width: number;
	title: string;
	text: string;
}

const PaymentItem: React.FC<PaymentItemProps> = ({
	src,
	height,
	width,
	title,
	text,
}) => {
	return (
		<StyledPaymentItem>
			<Image src={src} alt="PaymentIcon" width={width} height={height} />
			<StyledText>
				<p>{title}</p>
				<span>{text}</span>
			</StyledText>
		</StyledPaymentItem>
	);
};

const StyledPaymentItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-image: url('./images/lllBg.png');
	background-repeat: no-repeat;
	background-position: left;
	background-color: ${colors.plateLight};
	box-shadow: 0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,
		0 1px 0 0 rgba(189, 189, 238, 0.15) inset,
		0 10px 10px 0 rgba(6, 6, 40, 0.55);
	border-radius: 4px;
	border: solid 1px ${colors.strokeObject};
`;

const StyledText = styled.div`
	padding-right: 38px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	p {
		font-size: 16px;
		line-height: 22px;
		letter-spacing: -3%;
	}
	span {
		font-size: 26px;
		font-weight: 800;
		line-height: 32px;
		letter-spacing: -3%;
		margin-top: 2px;
	}
`;

export default PaymentItem;
