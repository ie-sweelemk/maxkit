import { spacing } from "../theme/config/variables";
import { DividerStyled } from "./divider.styled";

type DividerProps = {
  spacing?: keyof typeof spacing
}

const Divider: React.FC<DividerProps> = ({ spacing = "xl" }) => {
  return (
    <DividerStyled space={spacing} />
  )
}

export default Divider;