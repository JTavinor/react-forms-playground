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

// Page containing two forms that move off or on the screen when toggled
function RefactorLoginForm() {
  // Variables + method used to set classname on form
  const [registerHidden, setRegisterHidden] = useState("hideToLeft");
  const [loginHidden, setLoginHidden] = useState("");

  const swapForms = () => {
    //
    // WILL NEED AN EXTRA CONDITIONAL IN HERE
    // SUBSCRIBE TO REDUX LOADING PARAMETER ON AUTH AND USER
    // IF LOADING THEN PREVENT CHANGING FORMS
    //
    if (registerHidden) {
      setRegisterHidden("");
      setLoginHidden("hideToRight");
    } else {
      setRegisterHidden("hideToLeft");
      setLoginHidden("");
    }
  };

  // Set these functions to whatever you want to do on form submission
  const onLoginSubmit = (data) => console.log(data);
  const onRegisterSubmit = (data) => console.log(data);

  return (
    <div className="overFlowControl">
      <div className="formPageContainer">
        <GenericReactHookForm
          formSubmit={onRegisterSubmit}
          formFields={registerFormFields}
          formHeading="Create Account"
          submitFormButtonText="Register"
          changeFormHeading="Already have an account?"
          changeFormButtonText="Go to Login"
          swapForms={swapForms}
          hidden={registerHidden}
        />
        <GenericReactHookForm
          formSubmit={onLoginSubmit}
          formFields={loginFormFields}
          hiddenClass={{ className: "loginHidden", initialHidden: false }}
          formHeading="Sign in to Slow Habits"
          submitFormButtonText="Login"
          changeFormHeading="Don't have an account?"
          changeFormButtonText="Register"
          swapForms={swapForms}
          hidden={loginHidden}
        />
      </div>
    </div>
  );
}

export default RefactorLoginForm;
