import { useState } from "react";
import Modal from "../../UI/Modal";
import classes from "./UserJoin.module.css";

const UserJoin = (props) => {
  const [showUserLogin, setShowUserLogin] = useState(false);

  const userLoginShowHandler = () => {
    setShowUserLogin(true);
  };

  return (
    <Modal onClose={props.onClose}>
      {!showUserLogin && (
        <form className={classes.join_form}>
          <button className={classes.close} onClick={props.onClose}>
            x
          </button>
          <label>Name</label>
          <input type="text" className={classes.name} />
          <label>E-mail</label>
          <input type="email" className={classes.email} />
          <label>Password</label>
          <input type="password" className={classes.password} />
          <section className={classes.btn}>
            <button type="button" onClick={userLoginShowHandler}>
              Login
            </button>

            <button type="submit">Join</button>
          </section>
        </form>
      )}
      {showUserLogin && (
        <form className={classes.login_form}>
          <button
            type="button"
            className={classes.close}
            onClick={props.onClose}
          >
            x
          </button>
          <label>E-mail</label>
          <input type="email" className={classes.email} />
          <label>Password</label>
          <input type="password" className={classes.password} />
          <button type="button" className={classes.loginbtn}>
            Login
          </button>
        </form>
      )}
    </Modal>
  );
};

export default UserJoin;
