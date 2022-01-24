// General imports
import React, { useState, useRef } from "react";
import nextId from "react-id-generator";

// UI components
import Card from "../UI/Card";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Wrapper from "../Helpers/Wrapper";

// own component classes
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (!isFormValid(name, age)) {
      setError({
        title: "Validations",
        message: "The form is not valid (name is required and age must be in range)",
      });
      return;
    }

    props.onAddUser({
      name,
      age,
      id: nextId("user-id-"),
    });
    resetForm()
  };

  const closeHandler = () => {
    setError(null)
  }

  const isFormValid = (name, age) => {
    return (
      name.trim().length > 0 &&
      age.trim().length > 0 &&
      +age > 0 &&
      +age < 110
    );
  };

  const resetForm = () => {
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  }

  return (
    <Wrapper>
      {!!error && <Modal title={error.title} message={error.message} onClose={closeHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">What is the name?</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">How old is she/he?</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <div className={classes.info}>
            Greater than 0 and smaller than 110
          </div>
          <Button type="button" onClick={resetForm}>Clear</Button>
          <Button type="submit">Send</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
