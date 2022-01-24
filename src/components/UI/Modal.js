import React from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helpers/Wrapper";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}></div>
  );
};

const ModalOverlay = (props) => {
  return (
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
  );
};

const Modal = (props) => {
  return (
    <Wrapper>
      {
        ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))
      }
      {
        ReactDom.createPortal(
          <ModalOverlay
            title={props.title}
            message={props.message}
            onClose={props.onClose}
          />,
          document.getElementById('modal-root')
        )
      }
    </Wrapper>
  );
};

export default Modal;
