import React from 'react';
import styled from 'styled-components';
import { mq } from '@/styles';

import ServiceItem from './ServiceItem';

import { serviceItems } from '@/data/serviceItems';

const Services = () => {
	return (
		<StyledServices>
			{serviceItems.map((service) => (
				<ServiceItem key={service.id} {...service} />
			))}
		</StyledServices>
	);
};

const StyledServices = styled.div`
	min-width: 630px;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	${mq[2]} {
		max-width: 630px;
	}
	${mq[1]} {
		justify-content: center;
		align-items: center;
		max-width: none;
		min-width: auto;
		width: 100%;
	}
`;

export default Services;
