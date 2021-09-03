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
    <div className="mainContainer">
      <div className={`loginFormCont ${registerHidden} register`}>
        <h1>Register to continue</h1>
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
          <button type="submit">Submit</button>
        </form>
        <button
          onClick={() => {
            setRegisterHidden("registerHidden");
            setLoginHidden("");
            setLoginNotHidden("loginNotHidden");
          }}
        >
          Hide
        </button>
      </div>
      <div className={`loginFormCont ${loginHidden} ${loginNotHidden} login`}>
        <h1>Sign in to continue</h1>
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
          <button type="submit">Submit</button>
        </form>
        <button
          onClick={() => {
            setLoginHidden("hidden");
            setRegisterHidden("");
            setLoginNotHidden("");
          }}
        >
          Hide
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
