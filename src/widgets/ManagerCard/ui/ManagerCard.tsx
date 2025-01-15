import { FC } from 'react';
import { CardContainer, ContactsContainer, TextContainer } from './ManagerCard.styles';

interface ManagerCardProps {
  name: string;
  description: string;
  image?: string;
}

import PersonIcon from '@mui/icons-material/Person';
import { Text17, Text20Bold } from 'shared/lib/ui/Text';
import { Avatar, Button } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { vkDarkIcon } from 'shared/assets';

export const ManagerCard: FC<ManagerCardProps> = ({ name, description, image }) => {
  return (
    <CardContainer>
      {/* <CardImage src={image || exampleImage} alt="example" /> */}
      <Avatar src={image} alt="example" sx={{ width: 140, height: 140, marginTop: '0px' }}>
        {!image && <PersonIcon sx={{ width: 100, height: 100 }} />}
      </Avatar>
      <TextContainer>
        <Text20Bold>{name}</Text20Bold>
        <Text17>{description}</Text17>
      </TextContainer>
      <Button variant="outlined" fullWidth sx={{ textTransform: 'none' }}>
        Обратиться
      </Button>
      <ContactsContainer>
        <img src={vkDarkIcon} alt="vk" />
        <InstagramIcon />
        <TelegramIcon />
        <WhatsAppIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </ContactsContainer>
    </CardContainer>
  );
};
