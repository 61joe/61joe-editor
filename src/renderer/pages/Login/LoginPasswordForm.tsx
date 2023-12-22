import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { LOGIN_FORM_WIDTH } from 'renderer/constants/form';

const StyledForm = styled(
  ({
    children,
    className,
  }: {
    children?: React.ReactNode;
    className?: string;
  }) => <form className={className}>{children}</form>,
)`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Button
        sx={{
          width: LOGIN_FORM_WIDTH,
        }}
      >
        login
      </Button>
    </StyledForm>
  );
};

export default LoginPasswordFrom;
