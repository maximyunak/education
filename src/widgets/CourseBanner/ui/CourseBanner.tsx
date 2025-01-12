import { StyledButton } from "shared/lib";
import {
	BannerContainer,
	TitleContainer,
	TitleInfoContainer,
	BannerTitle,
	BannerSubtitle,
	ButtonContainer,
	ImageContainer,
	InfoContainer,
	InfoItem,
	InfoTitle,
	InfoSubtitle,
	InfoDescription,
} from './CourseBanner.styles';

interface BannerProps {
	title: string;
	subtitle: string;
	image: string;
	info: {
		title: string;
		subtitle: string;
		description: string;
	}[];
	buttons: {
		title: string;
		variant: 'contained' | 'outlined';
	}[];
};

export const CourseBanner: React.FC<BannerProps> = ({ title, subtitle, image, info, buttons }) => {
	return (
		<BannerContainer>

			<TitleContainer>
				<TitleInfoContainer>
					<BannerSubtitle>{subtitle}</BannerSubtitle>
					<BannerTitle>{title}</BannerTitle>
				</TitleInfoContainer>
				<ButtonContainer>
					{buttons.map((button) => (
						<StyledButton key={button.title} variant={button.variant}>
							{button.title}
						</StyledButton>
					))}
				</ButtonContainer>
			</TitleContainer>

			<ImageContainer>
				<img src={image} alt="Course cover" />
			</ImageContainer>

				<InfoContainer>
					{info.map((item, index) => (
						<InfoItem key={`${item.title}--${index}`}>
							<InfoTitle>{item.title}</InfoTitle>
							<InfoSubtitle>{item.subtitle}</InfoSubtitle>
							<InfoDescription>{item.description}</InfoDescription>
						</InfoItem>
					))}
				</InfoContainer>

		</BannerContainer>
	);
};
