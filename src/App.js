import './App.scss';
import { useState } from 'react';
import questions from './data/questions';

import Game from './components/Game';
import Result from './components/Result';

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];


  const clickVariant = (i) => {
    setStep(step + 1);
    if (i === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} clickVariant={clickVariant} step={step} />
      ) : (
        <Result correct={correct}  questions={questions}/>
      )}
    </div>
  );
}

export default App;
