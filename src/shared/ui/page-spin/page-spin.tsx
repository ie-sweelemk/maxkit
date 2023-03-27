import { useEffect, useState } from "react";
import cn from "classnames";
import { debounce } from "throttle-debounce";
import { NestedLoader } from "./page-spin.styled";
import { Loader } from "../loader";

type PageSpinProps = {
  wrapperClassName?: string;
  className?: string;
  spinning?: boolean;
  delay?: number;
  tip?: React.ReactNode;
  children: React.ReactNode;
};

function shouldDelay(spinning?: boolean, delay?: number): boolean {
  return !!spinning && !!delay && !isNaN(Number(delay));
}

const PageSpin: React.FC<PageSpinProps> = ({
  spinning: customSpinning = true,
  delay = 0,
  className,
  children,
  tip,
}) => {
  const [spinning, setSpinning] = useState<boolean>(
    () => customSpinning && !shouldDelay(customSpinning, delay)
  );

  useEffect(() => {
    if (customSpinning) {
      const showSpinning = debounce(delay, () => {
        setSpinning(true);
      });
      showSpinning();
      return () => {
        showSpinning?.cancel?.();
      };
    }

    setSpinning(false);
  }, [delay, customSpinning]);

  const spinClassName = cn("spin-container", {
    ["spinning"]: spinning,
  });

  const containerClassName = cn(`container`, {
    [`spinning-blur`]: spinning,
  });

  return (
    <NestedLoader className={className}>
      {spinning && (
        <div className={spinClassName}>
          <div>
            <div key="loading" className="spin">
              <Loader />
            </div>
            {tip ? <div className="tip-text">{tip}</div> : null}
          </div>
        </div>
      )}
      <div className={containerClassName}>{children}</div>
    </NestedLoader>
  );
};

export default PageSpin;
