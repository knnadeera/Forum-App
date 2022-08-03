import classes from "./Profile.module.css";
import ProfilePic from "../../Assets/ProfilePic.JPG";
import Card from "../UI/Card";

const Profile = (props) => {
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
          <button>New Proposal</button>
        </section>
        <section>
          <button>Treasury</button>
        </section>
        <section>
          <button>About</button>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
