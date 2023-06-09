import React from 'react';
import styled from 'styled-components';

import LanguageItem from './LanguageItem';

import { langs } from '@/data/langItems';
import { mq } from '@/styles';

const Languages: React.FC = () => {
	return (
		<StyledLanguages>
			{langs.map((lang) => (
				<LanguageItem key={lang.id} {...lang} />
			))}
		</StyledLanguages>
	);
};

const StyledLanguages = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	${mq[3]} {
		flex-direction: column;
	}
`;

export default Languages;
