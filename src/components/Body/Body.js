import { useState, useCallback, useEffect } from "react";
import classes from "./Body.module.css";
import NewProposal from "./Form/NewProposal";
import ProposalsList from "./ProposalsList";
import Profile from "./Profile";

const Body = (props) => {
  const [newProposalShown, setNewPropsalShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [proposals, setProposals] = useState([]);

  const newProposalShownHandler = () => {
    setNewPropsalShown(true);
  };

  const newProposalCloseHandler = () => {
    setNewPropsalShown(false);
  };

  const fetchProposalsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-79564-default-rtdb.asia-southeast1.firebasedatabase.app/proposal.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      const loadedProposal = [];

      for (const key in data) {
        loadedProposal.push({
          id: key,
          title: data[key].title,
          proposal: data[key].proposal,
          profilepic: data[key].profilepic,
          count: data[key].count,
          user: data[key].user,
        });
      }

      setProposals(loadedProposal);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProposalsHandler();
  }, [fetchProposalsHandler]);

  async function addProposalHandler(proposal) {
    const response = await fetch(
      "https://react-http-79564-default-rtdb.asia-southeast1.firebasedatabase.app/proposal.json",
      {
        method: "POST",
        body: JSON.stringify(proposal),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setProposals((prevProposal) => prevProposal.concat(proposal));
  }

  let content = <p className={classes.errmsg}>Found no proposals.</p>;

  if (proposals.length > 0) {
    content = <ProposalsList proposals={proposals} className={classes.content} />;
  }

  if (error) {
    content = <p className={classes.errmsg}>{error}</p>;
  }

  if (isLoading) {
    content = <p className={classes.errmsg}>Loading...</p>;
  }

  return (
    <div className={classes.body}>
      <div className={classes.profile}>
        <Profile showNewProposal={newProposalShownHandler} />
      </div>
      <div>
        <section className={classes.proposals}>{content}</section>
        {newProposalShown && (
          <NewProposal
            onAddProposal={addProposalHandler}
            onClose={newProposalCloseHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Body;
