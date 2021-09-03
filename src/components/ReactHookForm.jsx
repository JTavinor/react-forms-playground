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
      <div className="wrap">
        <div className="bg-color">
          <div className="inner">
            <h1 className="hello">Hello</h1>
          </div>
        </div>
      </div>
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
      <p className="border-gradient">Hello</p>
      <div className="testOuterOuter">
        <div className="testOuter">
          <div className="testInner"></div>
        </div>
      </div>
    </div>
  );
}

export default ReactHookForm;
