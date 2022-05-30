import { TextField, TextFieldProps } from '@mui/material';

export const InputEmail = (props: TextFieldProps) => {
  return (
    <TextField
      label="E-mail"
      type="email"
      sx={{ background: '#fff' }}
      size="small"
      fullWidth
      {...props}
    />
  );
};
