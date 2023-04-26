import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface ServiceItemProps {
	title: string;
	text: string;
	src: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ src, text, title }) => {
	return (
		<StyledServiceItem src={src}>
			<p>{title}</p>
			<span>{text}</span>
		</StyledServiceItem>
	);
};

const StyledServiceItem = styled.div<{ src: string }>`
	background-image: ${({ src }) => `url(${src})`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100% 100%;
	padding: 32px;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	background-color: ${colors.plateLight};
	box-shadow: 0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,
		0 1px 0 0 rgba(189, 189, 238, 0.15) inset,
		0 10px 10px 0 rgba(6, 6, 40, 0.55);
	border-radius: 4px;
	border: solid 1px ${colors.strokeObject};
	p {
		color: ${colors.yellow};
		font-size: 26px;
		font-weight: 800;
		line-height: 32px;
		letter-spacing: -3%;
	}
	span {
		font-weight: 400;
		font-size: 16px;
		line-height: 22px;
		letter-spacing: -3%;
		max-width: 144px;
	}
`;

export default ServiceItem;
