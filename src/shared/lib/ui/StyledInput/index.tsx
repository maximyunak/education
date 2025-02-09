import { OutlinedInput, FormHelperText, styled } from '@mui/material';
import { FC } from 'react';

interface StyledInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  type?: string;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
  maxHeight?: number;
  maxWidth?: number;
  rounded?: number;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
}

const ErrorText = styled(FormHelperText)({
  color: 'red',
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: '10px',
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
  width: '100%',
});

const StyledOutlinedInput = styled(OutlinedInput)({
  width: '100%',
  height: '53px',
  fontSize: '16px',
  fontFamily: 'Inter',
  transition: 'all 0.15s ease-in-out',

  '& .MuiOutlinedInput-notchedOutline': {
    transition: 'border-color 0.15s ease-in-out',
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
  startAdornment,
  ref,
  error,
  errorMessage,
  maxHeight,
  maxWidth,
  rounded,
  disabled,
  onBlur,
  name,
}) => {
  return (
    <InputContainer>
      <StyledOutlinedInput
        sx={{
          maxWidth,
          maxHeight: `${maxHeight}px`,
          borderRadius: `${rounded ? rounded : 10}px`,
          pointerEvents: disabled ? 'none' : 'all',
          width: '100%',
        }}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        value={value}
        type={type}
        name={name}
        onBlur={onBlur}
        endAdornment={endAdornment}
        ref={ref}
        // error={''}
        startAdornment={startAdornment}
      />
      {error && <ErrorText id="component-helper-text">{errorMessage}</ErrorText>}
    </InputContainer>
  );
};
