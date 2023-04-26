import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/styles';
import { icons } from 'public/index';

interface FAQItemProps {
	answer: string;
	question: string;
	list?: { id: number; title: string }[];
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, list }) => {
	const { ListStyle } = icons;

	return (
		<StyledFAQItem>
			<p>{question}</p>
			<span>{answer}</span>
			{list && (
				<ul>
					{list.map((li) => (
						<li key={li.id}>
							<Image src={ListStyle} alt="ListStyle" width={48} height={26} />
							{li.title}
						</li>
					))}
				</ul>
			)}
		</StyledFAQItem>
	);
};

const StyledFAQItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	p {
		max-width: 680px;
		font-size: 26px;
		font-weight: 800;
		line-height: 32px;
		color: ${colors.yellow};
	}
	span,
	li {
		max-width: 680px;
		font-size: 16px;
		line-height: 26px;
		font-weight: 400;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 16px;
		li {
			list-style: none;
			display: flex;
			align-items: flex-start;
		}
	}
`;

export default FAQItem;
