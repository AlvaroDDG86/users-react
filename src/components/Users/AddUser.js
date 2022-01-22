// General imports
import React, { useState } from "react";
import nextId from "react-id-generator";

// UI components
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

// own component classes
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      setError({
        title: "Validations",
        message: "The form is not valid (name is required and age must be in range)",
      });
      return;
    }

    props.onAddUser({
      name: enteredName,
      age: enteredAge,
      id: nextId("user-id-"),
    });
    setEnteredName("");
    setEnteredAge("");
  };

  const nameChangedHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeHandler = () => {
    setError(null)
  }

  const isFormValid = () => {
    return (
      enteredName.trim().length > 0 &&
      enteredAge.trim().length > 0 &&
      +enteredAge > 0 &&
      +enteredAge < 110
    );
  };

  return (
    <>
      {!!error && <Modal title={error.title} message={error.message} onClose={closeHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">What is the name?</label>
          <input
            type="text"
            id="username"
            value={enteredName}
            onChange={nameChangedHandler}
          />
          <label htmlFor="age">How old is she/he?</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangedHandler}
          />
          <div className={classes.info}>
            Greater than 0 and smaller than 110
          </div>
          <Button type="submit">Send</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
