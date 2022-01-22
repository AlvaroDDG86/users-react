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
    if (!isFormValid()) {
        alert('Form is not valid')
        return
    }
    console.log('Form', {
        name: enteredName,
        age: enteredAge
    })
    setEnteredName('')
    setEnteredAge('')
  };

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value)
  }

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const isFormValid = () => {
    return (enteredName.trim().length > 0 && enteredAge.trim().length > 0) && +enteredAge > 0
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">What is the name?</label>
        <input type="text" id="username" value={enteredName} onChange={nameChangedHandler} />
        <label htmlFor="age">How old is she/he?</label>
        <input type="number" id="age" value={enteredAge} onChange={ageChangedHandler} />
        <Button type="submit">Send</Button>
      </form>
    </Card>
  );
};

export default AddUser;
