import React from "react";
import GenericReactHookForm from "./GenericReactHookForm";

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

function RefactorLoginForm() {
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ overflow: "hidden", width: "100vw", position: "relative" }}>
      <div className="mainContainer">
        <GenericReactHookForm
          formSubmit={onSubmit}
          formFields={[
            {
              name: "loginEmail",
              validation: { required: true },
              type: "text",
            },
            {
              name: "loginPassword",
              validation: {
                required: true,
                type: "password",
                minLength: 5,
              },
              type: "password",
            },
          ]}
          hiddenClass={{ className: "loginHidden", initialHidden: false }}
          formHeading="Create Account"
          submitFormButtonText="Submit"
          changeFormHeading="Don't have an account?"
          changeFormButtonText="Register"
        />
      </div>
    </div>
  );
}

export default RefactorLoginForm;
