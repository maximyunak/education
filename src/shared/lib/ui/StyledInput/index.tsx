import { OutlinedInput } from '@mui/material';
import { FC } from 'react';

interface StyledInputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  endAdornment?: React.ReactNode;
  ref?: React.Ref<HTMLInputElement>;
}

export const StyledInput: FC<StyledInputProps> = ({
  placeholder,
  onChange,
  value,
  type,
  endAdornment,
  ref,
}) => {
  return (
    <OutlinedInput
      placeholder={placeholder}
      sx={{ width: '100%', height: '56px', borderRadius: '10px' }}
      onChange={onChange}
      value={value}
      type={type}
      endAdornment={endAdornment}
      ref={ref}
    />
  );
};
