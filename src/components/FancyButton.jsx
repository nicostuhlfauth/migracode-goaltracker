/* eslint-disable react/prop-types */
import styles from "./FancyButton.module.css";

export const FancyButton = ({ text, variant = "primary", handleClick }) => (
  <button
    className={`${styles.fancyButton} ${
      variant === "primary" ? styles.primaryButton : styles.secondaryButton
    }`}
    onClick={handleClick}
  >
    {text}
  </button>
);