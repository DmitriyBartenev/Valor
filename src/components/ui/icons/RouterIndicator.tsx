import React from 'react';

interface RouterIndicatorProps {
	active: boolean;
	id: number;
}

export const RouterIndicator: React.FC<RouterIndicatorProps> = ({
	active,
	id,
}) => {
	return (
		<svg
			width="8"
			height="10"
			viewBox="0 0 8 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				width={id === 1 ? '8' : '4'}
				height="2"
				rx="1"
				fill={id === 1 && active ? '#FCB223' : 'white'}
				fillOpacity={id !== 1 ? '0.2' : '1'}
			/>
			<rect
				y="4"
				width={id === 2 ? '8' : '4'}
				height="2"
				rx="1"
				fill={id === 2 && active ? '#FCB223' : 'white'}
				fillOpacity={id !== 2 ? '0.2' : '1'}
			/>
			<rect
				y="8"
				width={id === 3 ? '8' : '4'}
				height="2"
				rx="1"
				fill={id === 3 && active ? '#FCB223' : 'white'}
				fillOpacity={id !== 3 ? '0.2' : '1'}
			/>
		</svg>
	);
};
