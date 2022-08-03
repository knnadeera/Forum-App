import classes from "./Profile.module.css";
import ProfilePic from "../../Assets/ProfilePic.JPG";
import Card from "../UI/Card";
import { useState } from "react";
import About from "./About";

const Profile = (props) => {
  const [shownAbout, setShownAbout] = useState(false);

  const aboutShownHandler = () => {
    setShownAbout(true);
  };

  const aboutCloseHandler = () => {
    setShownAbout(false);
  };

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
        <button className={classes.button}>Join</button>
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
          <button onClick={aboutShownHandler}>About</button>
          {shownAbout && <About onClose={aboutCloseHandler} />}
        </section>
      </div>
    </Card>
  );
};

export default Profile;
