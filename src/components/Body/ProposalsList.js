import classes from "./ProposalsList.module.css";
import ProposalContent from "./ProposalContent";

// const DUMMY_FORUM = [
//   {
//     id: "m1",
//     profilepic: "https://niftyapenation.com/static/media/logo.d41d77f3.png",
//     user: "Ape Nation",
//     title: "Bringing Paper Mint Function",
//     comment:
//       "Create content with your Apes in our Digital Creative Studios. These will be online studios where you log in using your Ape through your MetaMask wallet and will be able to change your Ape's hair, clothes, and poses to create photoshoots and video clips with your digital self!",
//     count: 555,
//   },
//   {
//     id: "m2",
//     profilepic: "https://niftyapenation.com/static/media/logo.d41d77f3.png",
//     user: "Ape Nation",
//     title: "Bringing Paper Mint Function",
//     comment:
//       "Create content with your Apes in our Digital Creative Studios. These will be online studios where you log in using your Ape through your MetaMask wallet and will be able to change your Ape's hair, clothes, and poses to create photoshoots and video clips with your digital self!",
//     count: 557,
//   },
// ];

const ProposalsList = (props) => {
  const proposalList = props.proposals.map((proposal) => (
    <ProposalContent
      key={proposal.id}
      id={proposal.id}
      user={proposal.user}
      title={proposal.title}
      proposal={proposal.proposal}
      profilepic={proposal.profilepic}
      count={proposal.count}
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
