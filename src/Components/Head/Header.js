import { Fragment } from "react/cjs/react.production.min";
import CartButton from "./CartButton";
import classes from "./Header.module.css";
import cube from "../../pics/271678.webp";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Khao Piyo </h1>
        <CartButton></CartButton>
      </header>
      <div className={classes.image}>
        <img src={cube} alt="meals"></img>
      </div>
    </Fragment>
  );
};

export default Header;
