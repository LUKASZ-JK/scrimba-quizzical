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
    <>
      <div className="blob top">
        <img src="./src/assets/quiz-top.svg" />
      </div>
      <div className="quiz">
        {Questions}
        <Summary
          check={props.check}
          result={props.result}
          handleEnd={props.handleEnd}
          handleRestart={props.handleRestart}
        />
      </div>
      <div className="blob bottom">
        <img src="./src/assets/quiz-bottom.svg" />
      </div>
    </>
  );
};

export default Quiz;
