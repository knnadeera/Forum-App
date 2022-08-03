import classes from "./Forum.module.css";
import ForumContent from "./ForumContent";

const DUMMY_FORUM = [
  {
    id: "m1",
    profilepic: "https://niftyapenation.com/static/media/logo.d41d77f3.png",
    user: "Ape Nation",
    title: "Bringing Paper Mint Function",
    comment:
      "Create content with your Apes in our Digital Creative Studios. These will be online studios where you log in using your Ape through your MetaMask wallet and will be able to change your Ape's hair, clothes, and poses to create photoshoots and video clips with your digital self!",
    count: 555,
  },
  {
    id: "m2",
    profilepic: "https://niftyapenation.com/static/media/logo.d41d77f3.png",
    user: "Ape Nation",
    title: "Bringing Paper Mint Function",
    comment:
      "Create content with your Apes in our Digital Creative Studios. These will be online studios where you log in using your Ape through your MetaMask wallet and will be able to change your Ape's hair, clothes, and poses to create photoshoots and video clips with your digital self!",
    count: 557,
  },
];

const Forum = (props) => {
  const forumList = DUMMY_FORUM.map((forum) => (
    <ForumContent
      key={forum.id}
      id={forum.id}
      user={forum.user}
      title={forum.title}
      comment={forum.comment}
      count={forum.count}
      profilepic={forum.profilepic}
    />
  ));
  return (
    <div className={classes.forum}>
      <div>
        <h1>Proposals</h1>
      </div>
      <div className={classes.forum_list}>
        <ul>{forumList}</ul>
      </div>
    </div>
  );
};

export default Forum;
