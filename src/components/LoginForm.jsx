import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "../loginForm.css";

// Special Form component:
//  Takes as props:
//      a function to use onSubmit
//      names of all fields
//          In form of object? In order to associate with a validation object?
//      initial State for hidden classname
//      formHeading
//

const props = {
  formSubmit: "onSubmit",
  formFields: [
    { name: "loginEmail", validation: { required: true }, type: "text" },
    { name: "loginPassword", validation: { required: true }, type: "password" },
  ],
  hiddenClass: { className: "loginHidden", initialHidden: false },
  formHeading: "Create Account",
  submitFormButtonText: "Submit",
  changeFormHeading: "Don't have an account?",
  changeFormButtonText: "Register",
};

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });

  const onLoginSubmit = (data) => console.log(data, "loginform");
  const onRegisterSubmit = (data) => console.log(data, "registerform");

  const [loginHidden, setLoginHidden] = useState("");
  const [registerHidden, setRegisterHidden] = useState("hideToLeft");

  return (
    <div className="overFlowControl">
      <div className="formPageContainer">
        <div className={`formContainer ${registerHidden}`}>
          <h1>Create Account</h1>
          <form
            key={1}
            onSubmit={handleSubmit(onRegisterSubmit)}
            className="floatingLabelForm"
          >
            <div className="floatingLabelGroup">
              <input
                {...register("name", { required: true })}
                id="name"
                className="floatingInputField"
                required
              />
              <label htmlFor="name" className="floatingLabel">
                Name
              </label>
            </div>
            {errors.name && (
              <div className="inputErrorMessage">Name is required</div>
            )}
            <div className="floatingLabelGroup">
              <input
                {...register("email", { required: true })}
                id="email"
                className="floatingInputField"
                required
              />
              <label htmlFor="email" className="floatingLabel">
                Email
              </label>
            </div>
            {errors.email && (
              <div className="inputErrorMessage">Email is required</div>
            )}
            <div className="floatingLabelGroup">
              <input
                {...register("password", {
                  required: true,
                  type: "password",
                  minLength: 5,
                })}
                id="password"
                className="floatingInputField"
                type="password"
                required
              />
              <label htmlFor="password" className="floatingLabel">
                Password
              </label>
            </div>
            {errors.password && (
              <div className="inputErrorMessage">Password is required</div>
            )}
            <button type="submit" className="submitButton">
              Register
            </button>
          </form>
          <div className="divider" />
          <h2 className="switchFormHeading">Already have an account?</h2>
          <button
            className="submitButton switchFormButton"
            onClick={() => {
              setRegisterHidden("hideToLeft");
              setLoginHidden("");
            }}
          >
            Go to Login
          </button>
        </div>
        <div className={`formContainer ${loginHidden}`}>
          <h1>Sign in to Slow Habits</h1>
          <form
            key={2}
            onSubmit={handleSubmit2(onLoginSubmit)}
            className="floatingLabelForm"
          >
            <div className="floatingLabelGroup">
              <input
                {...register2("loginEmail", { required: true })}
                id="loginEmail"
                className="floatingInputField"
                required
              />
              <label htmlFor="loginEmail" className="floatingLabel">
                Email
              </label>
              {/* errors will return when field validation fails  */}
            </div>
            {errors2.loginEmail && (
              <div className="inputErrorMessage">Email is required</div>
            )}
            <div className="floatingLabelGroup">
              <input
                {...register2("loginPassword", {
                  required: true,
                  type: "password",
                  minLength: 5,
                })}
                id="loginPassword"
                className="floatingInputField"
                required
              />
              <label htmlFor="loginPassword" className="floatingLabel">
                Password
              </label>
              {/* errors2 will return when field validation fails  */}
            </div>
            {errors2.loginPassword && (
              <div className="inputErrorMessage">Password is required</div>
            )}
            <button type="submit" className="submitButton">
              Submit
            </button>
          </form>
          <div className="divider" />
          <h2 className="switchFormHeading">Don't have an account?</h2>
          <button
            className="submitButton switchFormButton"
            onClick={() => {
              setLoginHidden("hideToRight");
              setRegisterHidden("");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
