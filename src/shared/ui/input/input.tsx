import cn from "classnames";
import { UISizes } from "shared/types";
import { InputContainer, StyledInput, InputWrapper } from "./input.styled";

type InputOwnProps = {
  state?: "success" | "error" | "default";
  size?: UISizes;
  block?: boolean;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
};

type InputProps = InputOwnProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof InputOwnProps>;

const Input: React.FC<InputProps> = ({
  size = "medium",
  state = "default",
  block,
  label,
  prefix,
  suffix,
  ...props
}) => {
  const classes = cn("input", {
    [`input-${size}`]: size,
    [`input-${state}`]: state,
    [`input-block`]: block,
    [`input-preffix`]: prefix,
    [`input-suffix`]: suffix,
  });
  return (
    <InputContainer>
      {label && <span className="input-label">{label}</span>}
      <InputWrapper>
        {prefix && <span className="icon icon-preffix">{prefix}</span>}
        <StyledInput className={classes} {...props} />
        {suffix && <span className="icon icon-suffix">{suffix}</span>}
      </InputWrapper>
    </InputContainer>
  );
};

export default Input;
