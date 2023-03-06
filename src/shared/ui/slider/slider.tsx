import RCSlider, { SliderProps } from "rc-slider";
import { useTheme } from "styled-components";

const Slider: React.FC<SliderProps> = ({
  step = 0.01,
  min = 1,
  max = 3,
  ...props
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        marginBottom: 24,
      }}
    >
      <RCSlider
        step={step}
        min={min}
        max={max}
        {...props}
        trackStyle={{
          backgroundColor: theme.colors.primary
        }}
        handleStyle={{
          borderColor: theme.colors.primary,
          backgroundColor: theme.colors.primary,
          opacity: 1
        }}
        railStyle={{
          backgroundColor: theme.colors.primary90,
        }}
      />
    </div>
  );
};

export default Slider;
