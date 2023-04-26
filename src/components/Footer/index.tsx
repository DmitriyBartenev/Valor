import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { mq } from '@/styles';

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
	gap: 15px;
	flex-wrap: wrap;
	padding: 48px 200px;
	svg {
		path {
			fill: white;
		}
	}
	${mq[3]} {
		padding: 40px 120px;
	}
	${mq[2]} {
		padding: 40px 96px;
	}
	${mq[0]} {
		padding: 32px 32px;
		flex-direction: column;
	}
`;

const StyledFooterContacts = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
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
	${mq[0]} {
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
