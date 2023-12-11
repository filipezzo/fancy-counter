import Title from "./Title";
import Count from "./Count";
import ResetBtn from "./ResetBtn";
import BtnContainer from "./BtnContainer";
import Button from "./Button";
import { useState } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const lock = count === 5;

  const handleClickReset = () => {
    setCount(0);
  };

  const handleAddCount = () => {
    if (count >= 0 && count < 5) {
      setCount((prev) => prev + 1);
    }
  };

  const handleDecCount = () => {
    count > 0 && setCount((prev) => prev - 1);
  };

  return (
    <section className="card">
      <Title lock={lock} />
      <Count count={count} />
      <ResetBtn onReset={handleClickReset} />
      <BtnContainer>
        <Button type="minus" onRemove={handleDecCount} lock={lock} />
        <Button type="plus" onAdd={handleAddCount} lock={lock} />
      </BtnContainer>
    </section>
  );
}

export default Card;
