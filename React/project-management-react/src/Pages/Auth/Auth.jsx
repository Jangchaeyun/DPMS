import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import "./Auth.css";

const Auth = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="loginContainer">
      <div className="box h-[30rem] w-[25rem]">
        <div className="minContainer login">
          <div className="loginBox w-full px-10 space-y-5">
            {active ? <Signup /> : <Login />}
          </div>
          <div>
            <span>
              {active ? "이미 계정이 있으십니까?" : "계정이 없으십니까?"}
            </span>
            <Button variant="ghost" onClick={() => setActive(!active)}>
              {active ? "로그인" : "회원가입"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
