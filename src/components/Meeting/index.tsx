import React from 'react';
import styled from 'styled-components';
import { mq } from '@/styles';
import { colors } from '@/styles';

import MeetingItem from './MeetingItem';

import { meetingItems } from '@/data/meetingItems';

const Meeting = () => {
	return (
		<StyledMeeting>
			<h3>We've been sleeping for the last 10 years and now we're awake!</h3>
			<h4>Shall we meet?</h4>
			<StyledMeetingList>
				{meetingItems.map((meeting) => (
					<MeetingItem key={meeting.id} {...meeting} />
				))}
			</StyledMeetingList>
		</StyledMeeting>
	);
};

const StyledMeeting = styled.section`
	padding: 120px 200px;
	${mq[3]} {
		padding: 96px 120px;
	}
	${mq[2]} {
		padding: 96px 96px;
	}
	${mq[1]} {
		padding: 32px 16px;
	}
	h3 {
		max-width: 479px;
	}
	h4 {
		margin: 48px 0 24px;
		color: ${colors.yellow};
		font-weight: 800;
		font-size: 26px;
		line-height: 32px;
	}
`;

const StyledMeetingList = styled.div`
	display: flex;
	gap: 24px;
	flex-wrap: wrap;
`;

export default Meeting;
