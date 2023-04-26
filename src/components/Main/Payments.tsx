import React from 'react';
import styled from 'styled-components';

import { paymentList } from '@/data/paymentItems';
import PaymentItem from './PaymentItem';

const Payments: React.FC = () => {
	return (
		<StyledPayments>
			{paymentList.map((payment) => (
				<PaymentItem key={payment.id} {...payment} />
			))}
		</StyledPayments>
	);
};

const StyledPayments = styled.div`
	padding: 0 200px;
	height: 300px;
	width: fit-content;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 24px;
`;

export default Payments;
