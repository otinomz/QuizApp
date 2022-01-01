import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard'

const TOTAL_QUESTIONS = 15

const App = () => {
  const [loading, setIsLoaading = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [score, setScores] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">

      <h1>Appetizer Games</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score :</p>
      <p>Loading Questions</p>
      <QuestionCard
        question={questions[number].question}
        answers={questions[number].answers} 
        callbackFunction=""
        selectedAnswer={selectedAnswers ? selectedAnswers[number] : undefined }
        questionNumber={number + 1} 
        totalQuizQuestions={TOTAL_QUESTIONS}
      />

      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
