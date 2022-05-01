import styles from "./Button.module.css";

const Button = ({
  variant,
  text,
  disableShadow,
  states,
  disabled,
  size,
  color,
  startIcon,
  endIcon,
  children
}) => {
  return (
    <button
      className={`
    ${styles.button}
    ${color ? styles[color] : styles["default"]}
    ${styles[variant]}
    ${disableShadow ? styles.disableShadow : undefined}
    ${styles[size]}`}
      disabled={disabled ? "disabled" : ""}
    >
      {startIcon && <span className="material-icons">{startIcon}</span>}
      {/* {variant && <span className={styles["caps"]}> {variant}</span>}
      {color && <span className={styles["caps"]}> {color}</span>}  */}
      <span className={styles["caps"]}> Default </span>
      {endIcon && <span className="material-icons">{endIcon}</span>}
    </button>
  );
};

export default Button;
