import { useState } from "react";

function Form({ data, setData }) {
  // controlled inputs use state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

  function submitHandler(e) {
    // prevent default behavior
    // create a new todo object that fits the data schema
    // set the data array to include the new todo object 
    // clear the form
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Title"
      />
      <input
        type="text"
        placeholder="Description"
      />
      <input
        type="text"
        placeholder="Time"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
