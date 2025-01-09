import { Button } from '@mui/material';
import React from 'react';

export const LoginWithSocial = ({ children }: { children: React.ReactNode }) => {
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
    >
      {children}
    </Button>
  );
};
