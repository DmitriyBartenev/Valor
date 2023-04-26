import React from 'react';
import styled from 'styled-components';
import { mq } from '@/styles';

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
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	${mq[3]} {
		padding: 0 120px;
	}
	${mq[2]} {
		padding: 0 96px;
	}
	${mq[1]} {
		padding: 0 16px;
	}
`;

export default Payments;
