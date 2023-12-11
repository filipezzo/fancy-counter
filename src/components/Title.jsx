function Title({ lock }) {
  return (
    <h1 className="title">
      {lock ? (
        <span>
          Limit! buy a <b>pro version</b> for &gt;5{" "}
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}

export default Title;
