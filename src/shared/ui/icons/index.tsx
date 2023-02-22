import { Loader } from "./loader";

const IconComponents = {
  loader: <Loader />,
};

type IconProps = {
  name: keyof typeof IconComponents;
};

const Icon: React.FC<IconProps> = ({ name }) => {
  return IconComponents[name];
};

export default Icon;
