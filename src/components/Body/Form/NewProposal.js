import Modal from "../../UI/Modal";
import classes from "./NewProposal.module.css";

const NewProposal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <button className={classes.close} onClick={props.onClose}>x</button>
      <form className={classes.form}>
        <label>Title</label>
        <input type="text" className={classes.title_input}></input>
        <label>Your Proposal</label>
        <input type="text" className={classes.proposal_input}></input>
      </form>
      <button className={classes.post}>Post</button>
    </Modal>
  );
};

export default NewProposal;
