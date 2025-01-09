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
  letterSpacing: '0.2px',
  position: 'absolute',
  bottom: '-20px',
});

const InputContainer = styled('div')({
  position: 'relative',
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
      <OutlinedInput
        placeholder={placeholder}
        sx={{ width: '100%', height: '56px', borderRadius: '10px' }}
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
