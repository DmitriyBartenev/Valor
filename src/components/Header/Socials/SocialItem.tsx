import Image from 'next/image';
import React from 'react';

import { LangButton } from '@/components/ui/buttons/LangButton';

interface SocialItemProps {
	src: string;
	width: number;
	height: number;
	active: boolean;
}

const SocialItem: React.FC<SocialItemProps> = ({
	src,
	width,
	height,
	active,
}) => {
	return (
		<LangButton active={active}>
			<Image src={src} alt="SocialIcon" width={width} height={height} />
		</LangButton>
	);
};

export default SocialItem;
