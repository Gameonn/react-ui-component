import styles from "./Input.module.css";
import cx from "classnames";

const Input = (props) => {
  const {
    disableShadow,
    fullWidth,
    error,
    focus,
    disabled,
    size,
    helperText,
    multiline,
    rows,
    startIcon,
    endIcon,
  } = props;
  console.log(props, "props");

  if (multiline) {
    return (
      <>
        <textarea rows={rows} placeholder="Placeholder" wrap="soft"></textarea>
      </>
    );
  }

  return (
    <>
      {startIcon && (
        <span className="icons icons-start material-icons">{startIcon}</span>
      )}
      <input
        placeholder="Placeholder"
        className={cx(
          styles["form-control"],
          { [styles.disableShadow]: disableShadow },
          { [styles.disabled]: disabled },
          { [styles.error]: error },
          { [styles["full-width"]]: fullWidth },
          { [styles.size]: size }
        )}
        disabled={disabled ? "disabled" : ""}
        autoFocus={focus ? "autofocus" : ""}
      />
      {endIcon && (
        <span className="icons icons-end material-icons">{endIcon}</span>
      )}
      {helperText && (
        <small
          className={cx(styles["input-helper"], { [styles.error]: error })}
        >
          {helperText}
        </small>
      )}
    </>
  );
};

export default Input;
