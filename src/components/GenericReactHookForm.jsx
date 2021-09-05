import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Need to have the values for hidden, + the functions to change whether the form is hidden in the parent

const props = {
  formSubmit: "onSubmit",
  formFields: [
    { refName: "loginEmail", validation: { required: true }, type: "text" },
    {
      refName: "loginPassword",
      validation: { required: true },
      type: "password",
    },
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
  formHeading,
  changeFormButtonText,
  changeFormHeading,
  submitFormButtonText,
  hidden,
  changeHidden,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={`formContainer ${hidden}`}>
      <h1>{formHeading}</h1>
      <form onSubmit={handleSubmit(formSubmit)} className="floatingLabelForm">
        {formFields.map(({ refName, validation, type, name }) => (
          <>
            <div className="floatingLabelGroup">
              <input
                {...register(refName, { ...validation })}
                id={refName}
                className="floatingInputField"
                required
                type={type}
              />
              <label htmlFor={refName} className="floatingLabel">
                {name}
              </label>
            </div>
            {errors[refName] && (
              <div className="inputErrorMessage">{name} is required</div>
            )}
          </>
        ))}
        <button type="submit" className="submitButton">
          {submitFormButtonText}
        </button>
      </form>
      <div className="divider" />
      <h2 className="switchFormHeading">{changeFormHeading}</h2>
      <button
        className="submitButton switchFormButton"
        onClick={() => {
          changeHidden();
        }}
      >
        {changeFormButtonText}
      </button>
    </div>
  );
}

export default GenericReactHookForm;
