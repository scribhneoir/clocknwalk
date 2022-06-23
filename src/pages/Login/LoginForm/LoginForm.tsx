import Button from "../../../components/Atoms/Button";
import Field from "../../../components/Atoms/Field";
import { LoginFormProps } from "./LoginForm.models";

const LoginForm = (props: LoginFormProps) => {
  const { email, setEmail, pword, setPWord, setSignUp, loginSubmit } = props;

  return (
    <>
      <Field
        onChange={setEmail}
        value={email}
        type="email"
        placeholder="email"
      />
      <Field
        onChange={setPWord}
        value={pword}
        type="password"
        placeholder="password"
      />
      <div className="grid grid-cols-2 gap-8 justify-center content-center justify-self-center self-center py-2">
        <Button
          onClick={() => {
            setSignUp(true);
          }}
        >
          Sign Up
        </Button>
        <Button
          primary
          onClick={() => {
            loginSubmit();
          }}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
