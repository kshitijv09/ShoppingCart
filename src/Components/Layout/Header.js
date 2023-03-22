import React, { Fragment } from "react";
import foodimage from "../../Images/food.jpg";
import CartButton from "./CartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1> Available Meals </h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={styles.main_image}>
        <img src={foodimage} alt="Food laid out on a table" />
      </div>
    </Fragment>
  );
};
export default Header;
