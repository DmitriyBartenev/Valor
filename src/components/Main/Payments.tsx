import React from 'react';
import styled from 'styled-components';

import { paymentList } from '@/data/paymentList';
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
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
`;

export default Payments;