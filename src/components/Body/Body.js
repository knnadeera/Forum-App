import { useState } from "react";
import classes from "./Body.module.css";
import NewProposal from "./Form/NewProposal";
import Forum from "./Forum";
import Profile from "./Profile";

const Body = (props) => {
  const [newProposalShown, setNewPropsalShown] = useState(false);

  const newProposalShownHandler = () => {
    setNewPropsalShown(true);
  };

  const newProposalCloseHandler = () => {
    setNewPropsalShown(false);
  };

  return (
    <div className={classes.body}>
      <div className={classes.profile}>
        <Profile showNewProposal={newProposalShownHandler} />
      </div>
      <div>
        <Forum />
        {newProposalShown && <NewProposal onClose={newProposalCloseHandler} />}
      </div>
    </div>
  );
};

export default Body;
