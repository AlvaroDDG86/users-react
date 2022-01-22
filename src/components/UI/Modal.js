import React from "react";
import Card from "./Card";
import Button from "./Button";

import classes from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default Modal;
