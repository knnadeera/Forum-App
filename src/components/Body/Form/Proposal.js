// import useHttp from "../../hooks/use-HTTP";
// import NewProposal from "./NewProposal";

// const Proposal = (props) => {
//   const { isLoading, error, sendRequest: sendProposalRequst } = useHttp();

//   const creatProposal = (proposalText, proposalData) => {
//     const generatedId = proposalData.name; // firebase-specific => "name" contains generated id
//     const createdTask = { id: generatedId, text: proposalText };

//     props.onAddTask(proposalTask);
//   };

//   const enterProposalHandler = () => {
//     sendProposalRequst(
//       {
//         url: "https://forum-app-3940c-default-rtdb.asia-southeast1.firebasedatabase.app/",
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: { text: proposalText },
//       },
//       creatProposal.bind(null, proposalText)
//     );
//   };
//   return (
//     <section>
//       <NewProposal onEnterProposal={enterProposalHandler} />
//       {error && <p>{error}</p>}
//     </section>
//   );
// };

// export default Proposal;
