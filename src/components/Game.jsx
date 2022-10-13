function Game({ step, question, clickVariant }) {
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${step * 10}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((value, index) => (
          <li onClick={()=>clickVariant(index)} key={index}>
            {value}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Game;
