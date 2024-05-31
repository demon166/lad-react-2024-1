import { ChangeEventHandler, FC } from "react";

interface ChangeCountProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChangeCount: ChangeEventHandler<HTMLInputElement>;
}

const ChangeCount: FC<ChangeCountProps> = (props) => {
  const { count, onDecrement, onIncrement, onChangeCount } = props;
  return (
    <div style={{ display: "flex" }}>
      <button className="btn btn-light" onClick={onDecrement}>
        -
      </button>
      <input
        className="p-2"
        type="number"
        min={0}
        value={count}
        onChange={onChangeCount}
        style={{ width: "50px", marginInline: "10px" }}
      />
      <button className="btn btn-light" onClick={onIncrement}>
        +
      </button>
    </div>
  );
};

export default ChangeCount;
