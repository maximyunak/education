import { OutlinedInput } from '@mui/material';
import { FC } from 'react';

interface StyledInputProps {
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  endAdornment?: React.ReactNode;
}

export const StyledInput: FC<StyledInputProps> = ({
  placeholder,
  onChange,
  value,
  type,
  endAdornment,
}) => {
  return (
    <OutlinedInput
      placeholder={placeholder}
      sx={{ width: '100%', height: '56px', borderRadius: '10px' }}
      onChange={onChange}
      value={value}
      type={type}
      endAdornment={endAdornment}
    />
  );
};
