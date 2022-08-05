import { useRef, useState } from "react";
import Modal from "../../UI/Modal";
import classes from "./NewProposal.module.css";

const NewProposal = (props) => {
  const titleRef = useRef("");
  const proposalRef = useRef("");
  const [title, setTitle] = useState("");
  const [textarea, setTextarea] = useState("");
  const [error, setError] = useState();

  function submitHandler(event) {
    event.preventDefault();
    if (title.trim().length === 0) {
      setError({
        titleErrorMassage: "Please enter the title.",
      });
      return;
    }
    if (textarea.trim().length === 0) {
      setError({
        proposalErrorMassage: "Please enter your proposal.",
      });
      return;
    }

    // could add validation here...

    const proposal = {
      title: titleRef.current.value,
      proposal: proposalRef.current.value,
      profilepic: "https://niftyapenation.com/static/media/logo.d41d77f3.png",
      count: 555,
      user: "Ape Nation",
    };

    props.onAddProposal(proposal);
    props.onClose();
    setTextarea("");
    setTitle("");
    setError();
  }

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textareaChangeHandler = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form} onSubmit={submitHandler}>
        <button className={classes.close} onClick={props.onClose}>
          x
        </button>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className={classes.title_input}
          ref={titleRef}
          value={title}
          onChange={titleChangeHandler}
        ></input>
        {error && <p className={classes.error}>{error.titleErrorMassage}</p>}
        <label>Your Proposal</label>
        <textarea
          type="text"
          id="name"
          className={classes.proposal_input}
          ref={proposalRef}
          value={textarea}
          onChange={textareaChangeHandler}
        ></textarea>
        {error && <p className={classes.error}>{error.proposalErrorMassage}</p>}
        <button type="submit" className={classes.addbtn}>
          Add Proposal
        </button>
      </form>
    </Modal>
  );
};

export default NewProposal;
