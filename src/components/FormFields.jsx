import React from "react";

function FormFields({ formFields, register, errors }) {
  return formFields.map(({ refName, validation, type, name }) => (
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
  ));
}

export default FormFields;
