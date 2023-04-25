import React from 'react';
import styled from 'styled-components';

const Caption: React.FC = () => {
	return (
		<StyledCaption>
			<span>–</span>
			<h1>Valorous Affiliate Program</h1>
		</StyledCaption>
	);
};

const StyledCaption = styled.div`
	padding: 80px 0;
	display: flex;
	h1 {
		text-shadow: 0 15px 15px rgba(6, 6, 40, 0.5);
		max-width: 410px;
	}
	span {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		font-size: 96px;
		line-height: 96px;
		letter-spacing: -3%;
		font-weight: 800;
		width: 200px;
		text-shadow: 0 15px 15px rgba(6, 6, 40, 0.5);
	}
`;

export default Caption;
