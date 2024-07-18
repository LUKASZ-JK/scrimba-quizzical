import Answer from './Answer';
const Question = props => {
  const Answers = props.question.answers.map(answer => (
    <Answer
      key={answer.id}
      answer={answer}
      handleClick={() => props.handleClick(props.question.id, answer.id)}
      check={props.check}
    />
  ));

  return (
    <div className="question">
      <p className="single-question">{props.question.question}</p>
      <div className="answers">{Answers}</div>
    </div>
  );
};

export default Question;
