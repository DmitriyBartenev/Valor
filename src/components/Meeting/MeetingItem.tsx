import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styled from 'styled-components';

import { colors } from '@/styles';

interface MeetingItemProps {
	logo: StaticImageData;
	date: string;
	location: string;
	width: number;
	height: number;
}

const MeetingItem: React.FC<MeetingItemProps> = ({
	date,
	location,
	logo,
	width,
	height,
}) => {
	return (
		<StyledMeetingItem>
			<StyledLogo>
				<Image src={logo} alt="Logo" width={width} height={height} />
			</StyledLogo>

			<StyledDate>
				<p>{date}</p>
				<span>{location}</span>
			</StyledDate>
		</StyledMeetingItem>
	);
};

const StyledMeetingItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 32px;
	min-width: 302px;
	background-color: ${colors.plateDark};
	background-image: url('./images/lllBg.png');
	background-repeat: no-repeat;
	box-shadow: 0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,
		0 1px 0 0 rgba(189, 189, 238, 0.15) inset,
		0 10px 10px 0 rgba(6, 6, 40, 0.55);
	border-radius: 4px;
	border: solid 1px ${colors.strokeObject};
`;

const StyledLogo = styled.div`
	height: 120px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const StyledDate = styled.div`
	height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 2px;
	p {
		font-size: 26px;
		font-weight: 800;
		line-height: 32px;
		color: ${colors.white};
	}
	span {
		line-height: 22px;
	}
`;

export default MeetingItem;
