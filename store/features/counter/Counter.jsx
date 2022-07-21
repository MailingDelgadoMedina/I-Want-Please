import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";
import { toggleTheme } from "../theme/themeSlice";

const Counter = () => {
  const count = useSelector((store) => store.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button onClick={() => dispatch(toggleTheme())}>THEME TOGGLE</button>
      </div>
    </div>
  );
};

export default Counter;
