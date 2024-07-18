import './Welcome.css';

import WelcomeTop from './assets/welcome-top.svg';
import WelcomeBottom from './assets/welcome-bottom.svg';

const Welcome = props => {
  return (
    <>
      <div className="blob top">
        <img src={WelcomeTop} />
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
        <img src={WelcomeBottom} />
      </div>
    </>
  );
};

export default Welcome;
