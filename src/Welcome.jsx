import './Welcome.css';

const Welcome = props => {
  return (
    <>
      <div className="blob top">
        <img src="./src/assets/welcome-top.svg" />
      </div>
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
      <div className="blob bottom">
        <img src="./src/assets/welcome-bottom.svg" />
      </div>
    </>
  );
};

export default Welcome;
