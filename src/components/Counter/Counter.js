export function Counter({ counter, hendleDecrement, hendleIncrement }) {
  return (
    <div className="counter">
      <button onClick={hendleDecrement} type="button" className="btn">
        -
      </button>
      <p className="title-counter">{counter}</p>
      <button onClick={hendleIncrement} type="button" className="btn">
        +
      </button>
    </div>
  );
}
