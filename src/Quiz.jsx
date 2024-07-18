import Question from './Question';
import Summary from './Summary';

import QuizTop from './assets/quiz-top.svg';
import QuizBottom from './assets/quiz-bottom.svg';

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
        <img src={QuizTop} />
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
        <img src={QuizBottom} />
      </div>
    </>
  );
};

export default Quiz;
