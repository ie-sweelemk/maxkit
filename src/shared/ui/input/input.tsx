import cn from "classnames";
import { UISizes } from "shared/types";
import { InputContainer, StyledInput } from "./input.styled";

type InputOwnProps = {
  state?: "success" | "error" | "default";
  size?: UISizes;
  block?: boolean;
  label?: string;
};

type InputProps = InputOwnProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>;

const Input: React.FC<InputProps> = ({
  size = "medium",
  state = "default",
  block,
  label,
  ...props
}) => {
  const classes = cn("input", {
    [`input-${size}`]: size,
    [`input-${state}`]: state,
    [`input-block`]: block,
  });
  return (
    <InputContainer>
      {label && <span className="input-label">{label}</span>}
      <StyledInput className={classes} {...props} />
    </InputContainer>
  );
};

export default Input;
