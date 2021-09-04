import React, { useState } from "react";

// Need to have the values for hidden, + the functions to change whether the form is hidden in the parent

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

function GenericReactHookForm({
  formFields,
  formSubmit,
  hiddenClass,
  formHeading,
  changeFormButtonText,
  changeFormHeading,
  submitFormButtonText,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [hidden, setHidden] = useState(
    hiddenClass.initialHidden ? hiddenClass.className : ""
  );

  return (
    <div className={`loginFormCont ${hidden} positionFormGroup`}>
      <h1>{formHeading}</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="floatingLabelForm">
        <div className="floatingLabelGroup" id="firstFloatingLabelGroup">
          <input
            {...register(formFields[0].name, formFields[0].validation)}
            id={formFields[0].name}
            className="floatingInputField"
            required
          />
          <label htmlFor={formFields[0].name} className="floatingLabel">
            {formFields[0].name}
          </label>
        </div>
        {errors.formFields[0].name && (
          <div className="inputErrorMessage">
            {formFields[0].name} is required
          </div>
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
          {submitFormButtonText}
        </button>
      </form>
      <div className="divider" />
      <h2 className="noAccount">{changeFormHeading}</h2>
      <button
        className="loginButton hideButton"
        onClick={() => {
          setRegisterHidden("registerHidden");
          setLoginHidden("");
        }}
      >
        {changeFormButtonText}
      </button>
    </div>
  );
}

export default GenericReactHookForm;
