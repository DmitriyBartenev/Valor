import React from 'react';

import { LangButton } from '@/components/ui/buttons/LangButton';

interface SocialItemProps {
	Icon: () => JSX.Element;
	active: boolean;
}

const SocialItem: React.FC<SocialItemProps> = ({ Icon, active }) => {
	return (
		<LangButton active={active}>
			<Icon />
		</LangButton>
	);
};

export default SocialItem;
