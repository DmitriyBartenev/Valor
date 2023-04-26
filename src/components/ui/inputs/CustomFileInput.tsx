import React, { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { colors } from '@/styles';
import { icons } from 'public/index';

export const CustomFileInput = () => {
	const [file, setFile] = useState<File | null>(null);

	const { Plus } = icons;

	const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
		const selectFile = e.target.files ? e.target.files[0] : null;
		setFile(selectFile);
	};

	return (
		<StyledCustomFileInput file={file}>
			<Image src={Plus} alt="Attach a File" width={8} height={8} />
			<label htmlFor="attach">{file ? file.name : 'Attach a File'}</label>
			{file && (
				<StyledDeleteFile onClick={() => setFile((prev) => (prev = null))}>
					Delete
				</StyledDeleteFile>
			)}
			<input type="file" onChange={handleChangeFile} id="attach" />
		</StyledCustomFileInput>
	);
};

const StyledCustomFileInput = styled.div<{ file: File | null }>`
	display: flex;
	align-items: center;
	gap: 8px;
	label {
		color: ${({ file }) => (file ? colors.white : colors.yellow)} !important;
		margin-left: 0 !important;
		cursor: pointer;
	}
	input {
		display: none;
	}
`;

const StyledDeleteFile = styled.button`
	background-color: transparent;
	border: none;
	color: ${colors.yellow};
	font-size: 13px;
	line-height: 18px;
	cursor: pointer;
`;
