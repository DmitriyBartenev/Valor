import React from 'react';

interface DropdownIconProps {
	visible: boolean;
}

export const DropdownIcon: React.FC<DropdownIconProps> = ({ visible }) => {
	return (
		<svg
			width="2"
			height="10"
			viewBox="0 0 2 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity={!visible ? '1' : '0.3'}>
				<path
					d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55228 1.55228 2 1 2C0.447715 2 0 1.55228 0 1Z"
					fill={!visible ? '#FCB223' : '#8989AA'}
				/>
				<path
					d="M0 5C0 4.44772 0.447715 4 1 4C1.55228 4 2 4.44772 2 5C2 5.55228 1.55228 6 1 6C0.447715 6 0 5.55228 0 5Z"
					fill={!visible ? '#FCB223' : '#8989AA'}
				/>
				<path
					d="M0 9C0 8.44772 0.447715 8 1 8C1.55228 8 2 8.44772 2 9C2 9.55228 1.55228 10 1 10C0.447715 10 0 9.55228 0 9Z"
					fill={!visible ? '#FCB223' : '#8989AA'}
				/>
			</g>
		</svg>
	);
};
