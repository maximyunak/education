import { Button } from '@mui/material';
import { FC } from 'react';

interface StyledButtonProps {   
  children: React.ReactNode;
  onClick?: () => void;
}

export const StyledButton: FC<StyledButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        width: '100%',
        height: '56px',
        fontSize: '16px',
        textTransform: 'none',
        fontWeight: '500',
        borderRadius: '10px',
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
