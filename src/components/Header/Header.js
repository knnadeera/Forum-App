import { Fragment } from "react";
import Logo from "../../Assets/Logo.png";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <img src={Logo} alt="logo" width="70" />
        <button className={classes.button}>Connect Wallet</button>
      </div>
    </Fragment>
  );
};

export default Header;
