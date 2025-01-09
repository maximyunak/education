import { OutlinedInput, FormHelperText, styled } from '@mui/material';
import { FC } from 'react';

interface StyledInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  endAdornment?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
}

const ErrorText = styled(FormHelperText)({
  color: 'red',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '16px',
  letterSpacing: '0.25px',
  position: 'absolute',
  bottom: '-20px',
  opacity: 0,
  transform: 'translateY(-10px)',
  animation: 'slideIn 0.3s ease forwards',
  '@keyframes slideIn': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

const InputContainer = styled('div')({
  position: 'relative',
});

const StyledOutlinedInput = styled(OutlinedInput)({
  width: '100%',
  height: '56px',
  borderRadius: '10px',
  fontSize: '16px',
  fontFamily: 'Inter',
  transition: 'all 0.15s ease-in-out',

  '& .MuiOutlinedInput-notchedOutline': {
    transition: 'border-color 0.15s ease-in-out',
    // borderColor: 'transparent',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E0E0E0',
  },

  '&.Mui-focused': {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#1976d2',
      borderWidth: '2px',
    },
  },

  '&.Mui-error': {
    animation: 'shake 0.5s ease',

    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#d32f2f',
      borderWidth: '2px',
    },
  },

  '@keyframes shake': {
    '0%, 100%': {
      transform: 'translateX(0)',
    },
    '10%, 30%, 50%, 70%, 90%': {
      transform: 'translateX(-2px)',
    },
    '20%, 40%, 60%, 80%': {
      transform: 'translateX(2px)',
    },
  },
});

export const StyledInput: FC<StyledInputProps> = ({
  placeholder,
  onChange,
  value,
  type,
  endAdornment,
  ref,
  error,
  errorMessage,
}) => {
  return (
    <InputContainer>
      <StyledOutlinedInput
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
        endAdornment={endAdornment}
        ref={ref}
        error={error}
      />
      {error && <ErrorText id="component-helper-text">{errorMessage}</ErrorText>}
    </InputContainer>
  );
};
