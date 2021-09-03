import React, { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = (data) => console.log(data);

  const [loginHidden, setLoginHidden] = useState("");
  const [loginNotHidden, setLoginNotHidden] = useState("loginNotHidden");
  const [registerHidden, setRegisterHidden] = useState("registerHidden");

  return (
    <div style={{ overflow: "hidden", width: "100vw", position: "relative" }}>
      <div className="mainContainer">
        <div className={`loginFormCont ${registerHidden} register`}>
          <h1>Create Account</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="floatingLabelForm">
            <div className="floatingLabelGroup" id="firstFloatingLabelGroup">
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
                required
              />
              <label htmlFor="password" className="floatingLabel">
                Password
              </label>
            </div>
            {errors.password && (
              <div className="inputErrorMessage">Password is required</div>
            )}
            <button type="submit" className="loginButton">
              Register
            </button>
          </form>
          <div className="divider" />
          <h2 className="noAccount">Already have an account?</h2>
          <button
            className="loginButton hideButton"
            onClick={() => {
              setRegisterHidden("registerHidden");
              setLoginHidden("");
              setLoginNotHidden("loginNotHidden");
            }}
          >
            Go to Login
          </button>
        </div>
        <div className={`loginFormCont ${loginHidden} ${loginNotHidden} login`}>
          <h1>Sign in to Slow Habits</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="floatingLabelForm">
            <div className="floatingLabelGroup" id="firstFloatingLabelGroup">
              <input
                {...register("email", { required: true })}
                id="email"
                className="floatingInputField"
                required
              />
              <label htmlFor="email" className="floatingLabel">
                Email
              </label>
              {/* errors will return when field validation fails  */}
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
                required
              />
              <label htmlFor="password" className="floatingLabel">
                Password
              </label>
              {/* errors will return when field validation fails  */}
            </div>
            {errors.password && (
              <div className="inputErrorMessage">Password is required</div>
            )}
            <button type="submit" className="loginButton">
              Submit
            </button>
          </form>
          <div className="divider" />
          <h2 className="noAccount">Don't have an account?</h2>
          <button
            className="loginButton hideButton"
            onClick={() => {
              setLoginHidden("hidden");
              setRegisterHidden("");
              setLoginNotHidden("");
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
