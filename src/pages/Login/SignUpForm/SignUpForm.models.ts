export type SignUpFormProps = {
  email: string;
  setEmail: (value: string) => void;
  pword: string;
  setPWord: (value: string) => void;
  first: string;
  setFirst: (value: string) => void;
  last: string;
  setLast: (value: string) => void;
  pword2: string;
  setPWord2: (value: string) => void;
  setSignUp: (signUp: boolean) => void;
  signUpSubmit: () => void;
};
