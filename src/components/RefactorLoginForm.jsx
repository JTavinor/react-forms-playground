import React, { useState } from "react";
import GenericReactHookForm from "./GenericReactHookForm";

const registerFormFields = [
  {
    refName: "registerName",
    validation: { required: true },
    type: "text",
    name: "Name",
  },
  {
    refName: "registerEmail",
    validation: { required: true },
    type: "text",
    name: "Email",
  },
  {
    refName: "registerPassword",
    validation: {
      required: true,
      type: "password",
      minLength: 5,
    },
    type: "password",
    name: "Password",
  },
];

const loginFormFields = [
  {
    refName: "loginEmail",
    validation: { required: true },
    type: "text",
    name: "Email",
  },
  {
    refName: "loginPassword",
    validation: {
      required: true,
      type: "password",
      minLength: 5,
    },
    type: "password",
    name: "Password",
  },
];

function RefactorLoginForm() {
  const onSubmit = (data) => console.log(data);

  const [registerHidden, setRegisterHidden] = useState("hideToLeft");
  const [loginHidden, setLoginHidden] = useState("");

  const changeHidden = () => {
    if (registerHidden) {
      setRegisterHidden("");
      setLoginHidden("hideToRight");
    } else {
      setRegisterHidden("hideToLeft");
      setLoginHidden("");
    }
  };

  return (
    <div className="overFlowControl">
      <div className="formPageContainer">
        <GenericReactHookForm
          formSubmit={onSubmit}
          formFields={registerFormFields}
          formHeading="Create Account"
          submitFormButtonText="Register"
          changeFormHeading="Already have an account?"
          changeFormButtonText="Go to Login"
          changeHidden={changeHidden}
          hidden={registerHidden}
        />
        <GenericReactHookForm
          formSubmit={onSubmit}
          formFields={loginFormFields}
          hiddenClass={{ className: "loginHidden", initialHidden: false }}
          formHeading="Sign in to Slow Habits"
          submitFormButtonText="Login"
          changeFormHeading="Don't have an account?"
          changeFormButtonText="Register"
          changeHidden={changeHidden}
          hidden={loginHidden}
        />
      </div>
    </div>
  );
}

export default RefactorLoginForm;
