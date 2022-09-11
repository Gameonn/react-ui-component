import styles from "./Button.module.css";

const Button = ({
  variant,
  disableShadow,
  disabled,
  size,
  color,
  startIcon,
  endIcon,
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
      {startIcon && (
        <span className="material-icons" style={{ verticalAlign: "middle" }}>
          {startIcon}
        </span>
      )}
      <span className={styles["caps"]}> Default </span>
      {endIcon && (
        <span className="material-icons" style={{ verticalAlign: "middle" }}>
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
