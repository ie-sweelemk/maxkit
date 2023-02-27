import React from "react";
import cn from "classnames";
import { ButtonStyled } from "./button.styled";
import { Loader } from "../loader";

type ButtonOwnProps = {
  label?: string | React.ReactNode;
  variant?: "primary" | "text" | "link" | "default";
  size?: "large" | "medium" | "small";
  loading?: boolean;
  block?: boolean;
  onlyIcon?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

type ButtonProps = ButtonOwnProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>;

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "medium",
  loading,
  block,
  onlyIcon,
  label,
  prefix,
  suffix,
  ...props
}) => {
  const classes = cn(props.className, "btn", {
    [`btn-${size}`]: size,
    [`btn-${variant}`]: variant,
    [`btn-block`]: block,
    ["btn-loading"]: loading,
    ["btn-icon"]: prefix || suffix,
    ["btn-icon-only"]: onlyIcon,
    ["btn-spacebetween"]: prefix || suffix,
  });

  return (
    <ButtonStyled className={classes} {...props}>
      {loading ? (
        <div className="loading">
          <Loader />
        </div>
      ) : null}
      {!loading && prefix ? <span className="icon">{prefix}</span> : null}
      {!onlyIcon ? <span className="label">{label}</span> : null}
      {!loading && suffix ? <span className="icon">{suffix}</span> : null}
    </ButtonStyled>
  );
};

export default Button;
