// General imports
import React, { useState } from "react";
// UI components
import Card from "../UI/Card";
import Button from "../UI/Button";

// own component classes
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log('Form', {
        name: enteredName,
        age: enteredAge
    })
  };

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">What is the name?</label>
        <input type="text" id="username" onChange={nameChangedHandler} />
        <label htmlFor="age">How old is she/he?</label>
        <input type="number" id="age" onChange={ageChangedHandler} />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  );
};

export default AddUser;
