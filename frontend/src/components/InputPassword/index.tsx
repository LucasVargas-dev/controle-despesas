import { TextField, TextFieldProps } from '@mui/material';

export const InputPassword = (props: TextFieldProps) => {
  return (
    <TextField
      label="Senha"
      type="password"
      sx={{ background: '#fff' }}
      size="small"
      fullWidth
      {...props}
    />
  );
};
