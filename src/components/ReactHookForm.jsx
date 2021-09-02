import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="formDiv">
      <h1 className="hello">Hello</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        lab
        <input defaultValue="test" {...register("example")} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <button type="submit">Submit</button>
      </form>
      <h1 className="goodbye">Goodbye</h1>
    </div>
  );
}

export default ReactHookForm;
