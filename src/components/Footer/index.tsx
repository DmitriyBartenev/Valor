import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { images } from 'public/index';
import { icons } from '../ui/icons/_index';
import { colors } from '@/styles';

const Footer: React.FC = () => {
	const { Logo } = images;
	const { EmailIcon, TelegramIcon } = icons;

	return (
		<StyledFooter>
			<StyledFooterContacts>
				<Image src={Logo} alt="ValorLogo" width={172} height={40} />
				<p>© 2023. Valor Partners</p>
				<span>F.A.Q.</span>
				<span>Terms</span>
				<p>
					<TelegramIcon />
					@ValorManager
				</p>
				<p>
					<EmailIcon />
					support@valor.casino
				</p>
			</StyledFooterContacts>
			<StyledLanguages>
				<p>En</p>
				<span>Ru</span>
			</StyledLanguages>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 48px 200px;
	svg {
		path {
			fill: white;
		}
	}
`;

const StyledFooterContacts = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 32px;
	p {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;
	}
	span {
		color: ${colors.light};
	}
`;

const StyledLanguages = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 32px;
	span {
		color: ${colors.light};
	}
`;

export default Footer;
