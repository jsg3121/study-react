type types = {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
};


const Counter = ({ number, onIncrease, onDecrease }: types) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+ 1</button>
      <button onClick={onDecrease}>- 1</button>
    </div>
  );
};

export default Counter;