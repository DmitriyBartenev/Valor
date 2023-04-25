import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavButton } from '@/components/ui/buttons/NavButton';
import { RouterIndicator } from '@/components/ui/icons/RouterIndicator';

interface NavigationItemProps {
	title: string;
	path: string;
	id: number;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ title, path, id }) => {
	const router = useRouter();

	const active = router.pathname === path;

	return (
		<Link href={path}>
			<NavButton active={active}>
				<RouterIndicator active={active} id={id} />
				{title}
			</NavButton>
		</Link>
	);
};

export default NavigationItem;
