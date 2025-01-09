import { Button } from '@mui/material';
import { FC } from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  marginTop?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const StyledButton: FC<StyledButtonProps> = ({ children, onClick, marginTop, type }) => {
  return (
    <Button
      type={type}
      sx={{
        width: '100%',
        height: '56px',
        fontSize: '16px',
        textTransform: 'none',
        fontWeight: '500',
        borderRadius: '10px',
        marginTop: marginTop,
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
