import classes from "./ForumContent.module.css";
import Card from "../UI/Card";

const ForumList = (props) => {
  return (
    <div className={classes.rap}>
      <Card>
        <div className={classes.user}>
          <img src={props.profilepic} alt='propic' width='20' height='20' />
          {props.user}
        </div>
        <div className={classes.forum_content}>
          <h3>{props.title}</h3>
          <p>{props.comment}</p>
        </div>
        <div>
          <input type="checkbox" />
          <h8>yes</h8>
          {props.count}
        </div>
      </Card>
    </div>
  );
};

export default ForumList;
