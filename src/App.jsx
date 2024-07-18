import { useState, useEffect } from 'react';
import './App.css';

import { nanoid } from 'nanoid';
import he from 'he';

import questionService from './services/questions';
import Welcome from './Welcome';
import Quiz from './Quiz';
import Credits from './Credits';

function App() {
  const [ready, setReady] = useState(false);
  const [play, setPlay] = useState(false);
  const [restart, setRestart] = useState(false);
  const [check, setCheck] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [result, setResult] = useState(0);

  const startGame = () => {
    setPlay(true);
  };

  const restartGame = () => {
    setReady(false);
    setPlay(false);
    setRestart(true);
    setCheck(false);
    setResult(0);
  };

  const endGame = () => {
    questions.forEach(question => {
      question.answers.forEach(answer => {
        if (answer.selected && answer.correct) {
          setResult(result => result + 1);
        }
      });
    });
    setCheck(true);
  };

  const changeSelection = (questionId, answerId) => {
    if (!check) {
      setQuestions(prev => {
        let newQuestions = prev.map(question => {
          if (question.id === questionId) {
            let newAnswers = question.answers.map(answer => {
              answer.selected = false;
              if (answer.id === answerId) {
                answer.selected = true;
              }
              return answer;
            });
            question.answers = newAnswers;
          }
          return question;
        });
        return newQuestions;
      });
    }
  };

  const hook = () => {
    questionService
      .getQuestions()
      .then(response => {
        const questionsArray = response.results.map(el => {
          let answers = el.incorrect_answers;
          answers.splice(
            Math.floor(Math.random() * (el.incorrect_answers.length + 1)),
            0,
            el.correct_answer
          );
          return {
            id: nanoid(),
            question: he.decode(el.question),
            answers: answers.map(answer => ({
              id: nanoid(),
              answer: he.decode(answer),
              correct: answer === el.correct_answer ? true : false,
              selected: false
            }))
          };
        });
        setQuestions(questionsArray);
        setReady(true);
        console.log(questionsArray);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const hookDebug = () => {
    let timeout = setTimeout(() => {
      const response = {
        data: [
          {
            'type': 'multiple',
            'difficulty': 'easy',
            'category': 'Entertainment: Film',
            'question':
              'In the 1992 film &quot;Army of Darkness&quot;, what name does Ash give to his double-barreled shotgun?',
            'correct_answer': 'Boomstick',
            'incorrect_answers': ['Bloomstick', 'Blastbranch', '2-Pump Chump']
          },
          {
            'type': 'multiple',
            'difficulty': 'easy',
            'category': 'Entertainment: Film',
            'question':
              'What was the first feature-length computer-animated movie?',
            'correct_answer': 'Toy Story',
            'incorrect_answers': ['Tron', 'Lion king', '101 Dalmatians']
          },
          {
            'type': 'multiple',
            'difficulty': 'easy',
            'category': 'Entertainment: Film',
            'question':
              'Who plays the character of Po in the Kung Fu Panda movies?',
            'correct_answer': 'Jack Black',
            'incorrect_answers': [
              'Mirana Jonnes',
              'McConahey Ramses',
              'Jim Petersson'
            ]
          },
          {
            'type': 'multiple',
            'difficulty': 'easy',
            'category': 'Entertainment: Film',
            'question':
              'Which actress danced the twist with John Travolta in &#039;Pulp Fiction&#039;?',
            'correct_answer': 'Uma Thurman',
            'incorrect_answers': ['Kathy Griffin', 'Pam Grier', 'Bridget Fonda']
          },
          {
            'type': 'multiple',
            'difficulty': 'easy',
            'category': 'Entertainment: Film',
            'question':
              'Who starred as Bruce Wayne and Batman in Tim Burton&#039;s 1989 movie &quot;Batman&quot;?',
            'correct_answer': 'Michael Keaton',
            'incorrect_answers': ['George Clooney', 'Val Kilmer', 'Adam West']
          }
        ]
      };
      const questionsArray = response.data.map(el => {
        let answers = el.incorrect_answers;
        answers.splice(
          Math.floor(Math.random() * (el.incorrect_answers.length + 1)),
          0,
          el.correct_answer
        );
        return {
          id: nanoid(),
          question: he.decode(el.question),
          answers: answers.map(answer => ({
            id: nanoid(),
            answer: he.decode(answer),
            correct: answer === el.correct_answer ? true : false,
            selected: false
          }))
        };
      });
      setQuestions(questionsArray);
      setReady(true);
    }, '3000');
  };
  useEffect(hook, [restart]);

  if (!play) {
    return (
      <>
        <Welcome handleClick={startGame} ready={ready} />
        <Credits />
      </>
    );
  } else {
    return (
      <>
        <Quiz
          questions={questions}
          check={check}
          result={result}
          handleSelection={changeSelection}
          handleEnd={endGame}
          handleRestart={restartGame}
        />
        <Credits />
      </>
    );
  }
}

export default App;
