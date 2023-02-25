import { Logo } from "./logo";
import { Loader } from "./loader";
import { Grid } from "./grid";
import { Box } from "./box";
import { Cart } from "./cart";
import { Users } from "./users";
import { Star } from "./star";
import { Bag } from "./bag";
import { Settings } from "./settings";
import { Add } from "./add";
import { ChevronDown } from "./chevron-down";
import { ChevronUp } from "./chevronUp";

const IconComponents = {
  loader: <Loader />,
  logo: <Logo />,
  grid: <Grid />,
  box: <Box />,
  cart: <Cart />,
  users: <Users />,
  star: <Star />,
  bag: <Bag />,
  settings: <Settings />,
  add: <Add />,
  chevronDown: <ChevronDown />,
  chevronUp: <ChevronUp />,
};

type IconProps = {
  name: keyof typeof IconComponents;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  return IconComponents[name];
};

export default Icon;
