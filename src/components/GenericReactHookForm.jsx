import React from "react";
import { useForm } from "react-hook-form";
import FormFields from "./FormFields";

function GenericReactHookForm({
  formFields,
  formSubmit,
  formHeading,
  changeFormButtonText,
  changeFormHeading,
  submitFormButtonText,
  hidden,
  swapForms,
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
        <FormFields
          formFields={formFields}
          register={register}
          errors={errors}
        />
        <button type="submit" className="submitButton">
          {submitFormButtonText}
        </button>
      </form>
      <div className="divider" />
      <h2 className="switchFormHeading">{changeFormHeading}</h2>
      <button
        className="submitButton switchFormButton"
        onClick={() => {
          swapForms();
        }}
      >
        {changeFormButtonText}
      </button>
    </div>
  );
}

export default GenericReactHookForm;
