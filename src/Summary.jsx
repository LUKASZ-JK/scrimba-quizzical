const Summary = props => {
  if (props.check === false) {
    return (
      <div className="summary">
        <button className="end" onClick={props.handleEnd}>
          Check answers
        </button>
      </div>
    );
  } else {
    return (
      <div className="summary results">
        <p>You scored {props.result}/5 correct answers</p>
        <button className="end" onClick={props.handleRestart}>
          Play again
        </button>
      </div>
    );
  }
};

export default Summary;
