import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { Difficulty } from './API'
import { fetchQuizQuestions } from './API'


const TOTAL_QUESTIONS = 10

const App = () => {
  const [loading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [score, setScores] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  

  const startQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    
    <div>
      <h1>Appetizer Games</h1>
      <button className="start" onClick={startQuiz}>
        Start
      </button>
      <p className="score">Score :</p>
      <p>Loading Questions ...</p>
{/* <QuestionCard
         question={questions[number].question} 
         answers={questions[number].answers} 
         callbackFunction={checkAnswer}
         selectedAnswer={selectedAnswers ? selectedAnswers[number] : undefined }
         questionNumber={number + 1} 
         totalQuizQuestions={TOTAL_QUESTIONS}
       /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>

    </div>
  )
}

export default App
