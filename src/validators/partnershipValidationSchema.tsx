import * as yup from 'yup';

export const partnershipValidationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Must be a valid email')
		.required('Can not be empty'),
	password: yup
		.string()
		.min(6, 'At least 6 chars')
		.max(20, 'Must be at most 20 chars')
		.required(),
	telegram: yup.string().required('Can not be empty'),
});
