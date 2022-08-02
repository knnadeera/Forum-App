import classes from "./Body.module.css";
import Profile from "./Profile";

const Body = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.profile}>
          <Profile />
      </div>
      <div>
        <p>ihgiiufggwsrfgusrgwsghsowhgowho</p>
      </div>
    </div>
  );
};

export default Body;
