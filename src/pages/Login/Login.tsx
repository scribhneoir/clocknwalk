import { useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import Card from "../../components/Atoms/Card";
import Header from "../../components/Atoms/Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { LoginProps } from "./Login.models";

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [pword, setPWord] = useState("");
  const [pword2, setPWord2] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [signUp, setSignUp] = useState(false);

  const history = useHistory();

  const signUpSubmit = () => {
    history.push("/edit-team");
  };
  const loginSubmit = () => {
    history.push("/calendar");
  };
  return (
    <>
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
          loginSubmit={loginSubmit}
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
          signUpSubmit={signUpSubmit}
        />
      </Card>
    </>
  );
};

export default Login;
