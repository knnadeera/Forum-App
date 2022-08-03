import classes from "./Body.module.css";
import Forum from "./Forum";
import Profile from "./Profile";

const Body = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.profile}>
        <Profile />
      </div>
      <div>
        <Forum />
      </div>
    </div>
  );
};

export default Body;
