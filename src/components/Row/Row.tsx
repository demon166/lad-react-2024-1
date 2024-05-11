import { FC, ReactNode } from "react";

interface RowProps {
  children: ReactNode;
}
const Row: FC<RowProps> = ({ children }) => {
  return <div style={{ display: "flex" }}>{children}</div>;
};

export default Row;
