import classes from "./ProposalContent.module.css";
import Card from "../UI/Card";

const ForumList = (props) => {
  return (
    <div className={classes.rap}>
      <Card>
        <div className={classes.user}>
          <img src={props.profilepic} alt="propic" width="20" height="20" />
          {props.user}
        </div>
        <div className={classes.forum_content}>
          <h3>{props.title}</h3>
          <p>{props.proposal}</p>
        </div>
        <div className={classes.checkbox__div}>
          <label className={classes.checkbox}>
            <input type="checkbox" className={classes.checkbox__input} />
            <div className={classes.checkbox__box}></div>
            Yes
          </label>
          <div>{props.count}</div>
        </div>
      </Card>
    </div>
  );
};

export default ForumList;
