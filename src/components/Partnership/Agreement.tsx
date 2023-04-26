import React from 'react';

import { CustomCheckbox } from '../ui/inputs/CustomCheckbox';

interface AgreementProps {
	id: string;
	label: string;
}

const Agreement: React.FC<AgreementProps> = ({ id, label }) => {
	return (
		<>
			<CustomCheckbox id={id} />
			<label htmlFor={id}>{label}</label>
		</>
	);
};

export default Agreement;
