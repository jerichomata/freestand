import React from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  backdrop: {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
  },
  backdropImg: {
    margin: "auto",
    boxShadow: "3px 5px 7px rgba(0,0,0,0.5)",
    border: "3px solid white",
  },
}));
const Modal = ({ setSelectedImg, selectedImg }) => {
  const classes = useStyles();
  const handleClick = (e) => {
    if (e.target.className == 'makeStyles-backdrop-29') {
      setSelectedImg(null);
    }
  };

  return (

    <div className={classes.backdrop} onClick={handleClick}>
        <img className={classes.backdropImg} src={selectedImg} />
    </div>

  );
};

export default Modal;
