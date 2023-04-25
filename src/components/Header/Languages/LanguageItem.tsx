import { LangButton } from '@/components/ui/buttons/LangButton';
import React from 'react';

interface LanguageItemProps {
	title: string;
	active: boolean;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ title, active }) => {
	return <LangButton active={active}>{title}</LangButton>;
};

export default LanguageItem;
