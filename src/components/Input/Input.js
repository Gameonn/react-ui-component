import styles from "./Input.module.css";
import classNames from "classnames";

const Input = (props) => {
  const {
    disableShadow,
    fullWidth,
    error,
    focus,
    disabled,
    size,
    helperText,
    // startIcon,
    // endIcon,
  } = props;
  console.log(props, "props");
  return (
    <>
      <input
        placeholder="Placeholder"
        className={`
    ${disableShadow ? styles.disableShadow : undefined}
    ${error ? styles.error : undefined}
    ${fullWidth ? styles.fullWidth : undefined}
    ${styles[size]}`}
        disabled={disabled ? "disabled" : ""}
        autoFocus={focus ? "autofocus" : ""}
      />
      {helperText && (
        <small
          className={classNames(`${styles["input-helper"]}`, { error: error })}
        >
          {helperText}
        </small>
      )}
    </>
  );
};

export default Input;
