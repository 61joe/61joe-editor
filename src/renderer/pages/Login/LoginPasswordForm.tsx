import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  styled,
} from '@mui/material';
import { LOGIN_FORM_WIDTH } from 'renderer/constants/form';

const StyledForm = styled(({ children }: { children?: React.ReactNode }) => (
  <form>{children}</form>
))`
  width: 500px;
`;

const LoginPasswordFrom = () => {
  return (
    <StyledForm>
      <FormControl
        defaultValue=""
        required
        margin="dense"
        sx={{ width: LOGIN_FORM_WIDTH }}
      >
        <InputLabel required>Email</InputLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <FormControl
        defaultValue=""
        required
        margin="dense"
        sx={{ width: LOGIN_FORM_WIDTH }}
      >
        <InputLabel required>Password</InputLabel>
        <Input type="password" />
        <FormHelperText>We'll never share your password.</FormHelperText>
      </FormControl>
    </StyledForm>
  );
};

export default LoginPasswordFrom;
