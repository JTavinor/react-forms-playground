import React from "react";
import { Form, Field } from "react-final-form";

function ReactFinalForm(props) {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      Hello
      <Form
        onSubmit={onSubmit}
        initialValues={{
          name: "Hello",
        }}
        render={(props) => (
          <form onSubmit={props.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
}

export default ReactFinalForm;
