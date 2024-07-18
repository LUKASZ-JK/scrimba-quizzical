import Question from './Question';
import Summary from './Summary';

const Quiz = props => {
  const Questions = props.questions.map(question => {
    return (
      <Question
        key={question.id}
        question={question}
        handleClick={props.handleSelection}
        check={props.check}
      />
    );
  });

  return (
    <div className="quiz">
      {Questions}
      <Summary
        check={props.check}
        result={props.result}
        handleEnd={props.handleEnd}
        handleRestart={props.handleRestart}
      />
    </div>
  );
};

export default Quiz;
