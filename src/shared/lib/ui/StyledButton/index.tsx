import { Button } from '@mui/material';
import { FC } from 'react';

interface StyledButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  marginTop?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'contained' | 'outlined';
  maxWidth?: string;
  maxHeight?: string;
}

export const StyledButton: FC<StyledButtonProps> = ({
  children,
  onClick,
  marginTop,
  type,
  variant = 'contained',
  maxWidth,
  maxHeight,
}) => {
  return (
    <Button
      type={type}
      sx={{
        width: '100%',
        height: maxHeight || '56px',
        fontSize: '16px',
        textTransform: 'none',
        fontWeight: '500',
        borderRadius: '4px',
        marginTop: marginTop,
        maxWidth: maxWidth,
        '@media (max-width: 800px)': {
          maxWidth: '160px',
          fontSize: '14px',
        },
        '@media (max-width: 620px)': {
          height: '40px',
        },
        '@media (max-width: 450px)': {
          height: '35px',
        },
      }}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
