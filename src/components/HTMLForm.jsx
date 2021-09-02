import React from "react";

function HTMLForm(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>HTML Form</h1>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <p>
          Use input with the property type, and it will be automatically
          validated (in the form a@b)
        </p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <p>Search will provide a clear X when input is in the field</p>
        <label htmlFor="search">Search</label>
        <input type="search" id="search" name="search" />
        <p>
          Required fields are denoted by <abbr title="required">*</abbr>
        </p>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" />
        <abbr title="required" aria-label="Required">
          *
        </abbr>
        <button type="submit">Submit</button>
      </form>
      <form>
        <h1>Payment form</h1>
        <p>
          Required fields are followed by{" "}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>
      </form>
    </div>
  );
}

export default HTMLForm;
