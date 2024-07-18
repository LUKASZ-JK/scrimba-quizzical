const Welcome = props => {
  return (
    <>
      <div className="welcome">
        <h1>Quizzical</h1>
        <button
          className="start"
          onClick={props.handleClick}
          disabled={!props.ready}>
          Start quiz
        </button>
        {<div className={props.ready ? 'hidden loader' : 'loader'}></div>}
      </div>
    </>
  );
};

export default Welcome;
