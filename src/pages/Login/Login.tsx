import { useState } from "react";
import { BsClockFill } from "react-icons/bs";

import Button from "../../components/Atoms/Button";
import Card from "../../components/Atoms/Card";
import Field from "../../components/Atoms/Field";
import Header from "../../components/Atoms/Header";
import { LoginProps } from "./Login.models";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [pword, setPWord] = useState("");
  const [pword2, setPWord2] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="flex flex-col md:w-1/2 h-full py-28 md:py-40 justify-self-center self-center">
      <div className="flex flex-row py-2">
        <Header>CL</Header>
        <Header>
          <BsClockFill />
        </Header>
        <Header>CK N' WALK</Header>
      </div>
      <Card flipped={signUp}>
        <LoginForm
          email={email}
          pword={pword}
          setEmail={setEmail}
          setPWord={setPWord}
          setSignUp={setSignUp}
        />
        <SignUpForm
          first={first}
          last={last}
          email={email}
          pword={pword}
          pword2={pword2}
          setEmail={setEmail}
          setPWord={setPWord}
          setFirst={setFirst}
          setLast={setLast}
          setPWord2={setPWord2}
          setSignUp={setSignUp}
        />
      </Card>
    </div>
  );
};

export default Login;
