import { useRef } from "react";
import Modal from "../../UI/Modal";
import classes from "./NewProposal.module.css";

const NewProposal = (props) => {
  const titleRef = useRef("");
  const proposalRef = useRef("");
 

 
  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const proposal = {
      title: titleRef.current.value,
      proposal: proposalRef.current.value,
      profilepic: "https://niftyapenation.com/static/media/logo.d41d77f3.png",
      count: 555,
      user: "Ape Nation",
    };

    props.onAddProposal(proposal);
  }

  return (
    <Modal onClose={props.onClose}>
      <form  className={classes.form} onSubmit={submitHandler}>
        <button className={classes.close} onClick={props.onClose}>
          x
        </button>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className={classes.title_input}
          ref={titleRef}
        ></input>
        <label>Your Proposal</label>
        <input
          type="text"
          id="name"
          className={classes.proposal_input}
          ref={proposalRef}
        ></input>
        <button className={classes.post}>Add Proposal</button>
      </form>
    </Modal>
  );
};

export default NewProposal;
