import classes from "./Body.module.css";
import Profile from "./Profile";

const Body = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.profile}>
        <div>
          <Profile />
        </div>
      </div>
      <div>
        <p>ihgiiufggwsrfgusrgwsghsowhgowho</p>
      </div>
    </div>
  );
};

export default Body;
