import React from 'react';
import styled from 'styled-components';

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
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
`;

export default Services;
