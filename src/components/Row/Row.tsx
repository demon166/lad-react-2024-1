import { FC, ReactNode } from "react";
import classNames from "classnames";

interface RowProps {
  children?: ReactNode;
  gap?: 0 | 1 | 2 | 3 | 4;
}
const Row: FC<RowProps> = ({ children, gap }) => {
  return (
    <div
      className={classNames([
        "row",
        {
          [`gap-${gap}`]: gap === undefined,
        },
      ])}
    >
      {children}
    </div>
  );
};

export default Row;
