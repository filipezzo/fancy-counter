function Button({ type, onAdd, onRemove, lock }) {
  const render = type === "plus" ? onAdd : onRemove;

  const handleClick = () => {
    return render();
  };
  return (
    <button disabled={lock} onClick={handleClick} className="count-btn">
      {type === "plus" ? "+" : "-"}
    </button>
  );
}

export default Button;
