import { FC } from "react";

interface ChangeCountProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ChangeCount: FC<ChangeCountProps> = (props) => {
  const { count, onDecrement, onIncrement } = props;
  console.log("ChangeCount");
  return (
    <div>
      <button className="btn btn-light" onClick={onDecrement}>
        -
      </button>
      <span className="p-2">{count}</span>
      <button className="btn btn-light" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default ChangeCount;
