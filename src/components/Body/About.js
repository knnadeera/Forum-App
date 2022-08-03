import Modal from "../UI/Modal";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <button className={classes.close} onClick={props.onClose}>
        x
      </button>
      <div className={classes.about}>
        <h2>About Us</h2>
        <h3>SLRC</h3>
        <h4>we are working on somthing</h4>
      </div>
    </Modal>
  );
};

export default About;
