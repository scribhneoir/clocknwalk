import Button from "../../../components/Atoms/Button";
import Field from "../../../components/Atoms/Field";
import { useValidPassword, useValidEmail } from "../../../hooks/validation";
import { SignUpFormProps } from "./SignUpForm.models";

const SignUpForm = (props: SignUpFormProps) => {
  const {
    first,
    setFirst,
    last,
    setLast,
    email,
    setEmail,
    pword,
    setPWord,
    pword2,
    setPWord2,
    setSignUp,
    signUpSubmit,
  } = props;
  const [pwordError] = useValidPassword(pword);
  const [emailError] = useValidEmail(email);
  return (
    <>
      <Field
        onChange={setFirst}
        value={first}
        type="text"
        placeholder="first name"
      />
      <Field
        onChange={setLast}
        value={last}
        type="text"
        placeholder="last name"
      />
      <Field
        onChange={setEmail}
        value={email}
        error={emailError}
        type="email"
        placeholder="email"
      />
      <Field
        onChange={setPWord}
        value={pword}
        error={pwordError}
        type="password"
        placeholder="password"
      />
      <Field
        onChange={setPWord2}
        value={pword2}
        error={pword !== pword2 ? "Passwords do not match" : undefined}
        type="password"
        placeholder="retype password"
      />
      <div className="grid grid-cols-2 gap-8 justify-center content-center justify-self-center self-center py-2">
        <Button
          onClick={() => {
            setSignUp(false);
          }}
        >
          Login
        </Button>
        <Button
          primary
          onClick={() => {
            signUpSubmit();
          }}
        >
          Sign Up
        </Button>
      </div>
    </>
  );
};

export default SignUpForm;
