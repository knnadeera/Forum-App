import classes from "./Profile.module.css";
import ProfilePic from "../../Assets/ProfilePic.JPG";
import Card from "../UI/Card";
import { useState } from "react";
import About from "./About";
import UserJoin from "./User/UserJoin";

const Profile = (props) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showUserJoin, setShowUserJoin] = useState(false);

  const aboutShowHandler = () => {
    setShowAbout(true);
  };

  const aboutCloseHandler = () => {
    setShowAbout(false);
  };

  const userJoinShowHandler = () => {
    setShowUserJoin(true);
  };

  const userJoinCloseHandler= () =>{
    setShowUserJoin(false)
  }

  return (
    <Card>
      <div className={classes.pfl}>
        <img
          src={ProfilePic}
          alt="profilepic"
          className={classes.img}
          width="65"
          height="62"
        />
        <h1>Ape Nation</h1>
        <h6>456 members</h6>
        <button className={classes.button} onClick={userJoinShowHandler}>
          Join
        </button>
        {showUserJoin && <UserJoin onClose={userJoinCloseHandler}/>}
      </div>
      <div className={classes.pages}>
        <section>
          <button>Proposals</button>
        </section>
        <section>
          <button onClick={props.showNewProposal}>New Proposal</button>
        </section>
        <section>
          <button>Treasury</button>
        </section>
        <section>
          <button onClick={aboutShowHandler}>About</button>
          {showAbout && <About onClose={aboutCloseHandler} />}
        </section>
      </div>
    </Card>
  );
};

export default Profile;
