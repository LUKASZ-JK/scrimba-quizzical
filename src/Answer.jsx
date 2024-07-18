const Answer = props => {
  let style = {
    color: '#293264',
    fontWeight: '500',
    borderRadius: '0.75rem',
    borderStyle: 'solid',
    borderColor: '#4D5B9E',
    backgroundColor: 'transparent',
    padding: '0.4rem 1.4rem',
    margin: '0 0.4rem'
  };
  if (props.check === false) {
    if (props.answer.selected) {
      style = { ...style, backgroundColor: '#D6DBF5' };
    }
  } else {
    if (props.answer.correct === false && props.answer.selected) {
      style = { ...style, backgroundColor: '#F8BCBC', borderStyle: 'none' };
    } else if (props.answer.correct) {
      style = { ...style, backgroundColor: '#94D7A2', borderStyle: 'none' };
    } else {
      style = { ...style, opacity: '50%' };
    }
  }

  return (
    <button style={style} onClick={props.handleClick}>
      {props.answer.answer}
    </button>
  );
};
export default Answer;
