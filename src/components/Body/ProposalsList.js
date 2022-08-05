import classes from "./ProposalsList.module.css";
import ProposalContent from "./ProposalContent";

const ProposalsList = (props) => {
  const proposalList = props.proposals.map((proposal) => (
    <ProposalContent
      key={proposal.id}
      id={proposal.id}
      user={proposal.user}
      title={proposal.title}
      proposal={proposal.proposal}
      profilepic={proposal.profilepic}
      onClickCount={props.onClickCount}
    />
  ));

  const displayProposalList = proposalList.reverse();

  return (
    <div className={classes.proposal}>
      <div>
        <h1 className={classes.heading}>Proposals</h1>
      </div>
      <div className={classes.proposal_list}>
        <ul>{displayProposalList}</ul>
      </div>
    </div>
  );
};

export default ProposalsList;
