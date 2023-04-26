import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import FAQItem from './FAQItem';

import { faqItems } from '@/data/faqItems';
import { icons } from 'public/index';
import { colors } from '@/styles';

interface FAQProps {
	toggleFAQModal: () => void;
}

const FAQ: React.FC<FAQProps> = ({ toggleFAQModal }) => {
	const { Close } = icons;

	return (
		<StyledFAQBox>
			<StyledFAQ>
				<h3>F.A.Q.</h3>
				<StyledFAQList>
					{faqItems.map((faqItem) => (
						<FAQItem key={faqItem.id} {...faqItem} />
					))}
				</StyledFAQList>
				<StyledCloseFAQ>
					<Image
						src={Close}
						alt="CloseFAQ"
						width={16}
						height={16}
						onClick={toggleFAQModal}
					/>
				</StyledCloseFAQ>
			</StyledFAQ>
		</StyledFAQBox>
	);
};

const StyledFAQBox = styled.div`
	position: fixed;
	z-index: 2;
	background-color: #00000050;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	overflow: auto;
`;

const StyledFAQ = styled.div`
	padding: 80px;
	position: relative;
	background-color: ${colors.faqSuperDark};
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	border: solid 1px ${colors.strokeObject};
	box-shadow: 0 -8px 0 0 rgba(5, 5, 27, 0.4) inset,
		0 1px 0 0 rgba(189, 189, 238, 0.15) inset,
		0 10px 10px 0 rgba(6, 6, 40, 0.55);
	h3 {
		margin-bottom: 64px;
	}
`;

const StyledCloseFAQ = styled.button`
	position: absolute;
	right: 24px;
	top: 24px;
	background-color: transparent;
	border: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledFAQList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 48px;
`;

export default FAQ;
