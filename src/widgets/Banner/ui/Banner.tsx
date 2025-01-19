import {
  BannerContainer,
  BannerTitleContainer,
  BannerTitle,
  InfoContainer,
  HelpText,
  ButtonContainer,
  ImageContainer,
  InfoItem,
} from './Banner.styles';
import { StyledButton } from 'shared/lib';

interface BannerProps {
  title: string;
  subtitle: string;
  info: {
    title: string;
    subtitle: string;
  }[];
  image: string;
  buttons: {
    title: string;
    variant: 'contained' | 'outlined';
  }[];
}

export const Banner: React.FC<BannerProps> = ({ title, subtitle, info, image, buttons }) => {
  return (
    <BannerContainer>
      <BannerTitleContainer>
        <HelpText>{subtitle}</HelpText>
        <BannerTitle>{title}</BannerTitle>
        <ButtonContainer>
          {buttons.map((button) => (
            <StyledButton key={button.title} variant={button.variant}>
              {button.title}
            </StyledButton>
          ))}
        </ButtonContainer>
      </BannerTitleContainer>
      <ImageContainer>
        <img src={image} alt="stonks" />
        <InfoContainer>
          {info.map((item, index) => (
            <InfoItem key={`${item.title}--${index}`}>
              <BannerTitle>{item.title}</BannerTitle>
              <HelpText>{item.subtitle}</HelpText>
            </InfoItem>
          ))}
        </InfoContainer>
      </ImageContainer>
    </BannerContainer>
  );
};
