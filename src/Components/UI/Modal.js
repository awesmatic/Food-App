import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Fragment>
      <div className={classes.backdrop} >
        <div className={classes["modal-overlay"]}>{props.children}</div>
      </div>
    </Fragment>,
    document.getElementById("overlays")
  );
};

export default Modal;
