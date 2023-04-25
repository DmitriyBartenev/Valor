import React from 'react';
import styled from 'styled-components';

import Caption from './Caption';
import Payments from './Payments';

const Main: React.FC = () => {
	return (
		<StyledMain>
			<Caption />
			<Payments />
		</StyledMain>
	);
};

const StyledMain = styled.main``;

export default Main;
