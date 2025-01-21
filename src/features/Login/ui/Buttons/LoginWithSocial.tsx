import { Button } from '@mui/material';
import React from 'react';

interface LoginWithSocialProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const LoginWithSocial = ({ children, onClick }: LoginWithSocialProps) => {
  return (
    <Button
      variant="outlined"
      sx={{
        // width: '353px',
        height: '56px',
        borderRadius: '10px',
        gap: '10px',
        borderColor: '#d8dadc',
        color: '#000000',
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: 'Inter',
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
