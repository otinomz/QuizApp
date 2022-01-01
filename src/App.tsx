import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { Difficulty, QuestionState, fetchQuizQuestions } from './API'

type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QUESTIONS = 15

const App = () => {
  const [IsLoading, setIsLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(questions);
   
  const startQuiz = async () => {
    setIsLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    )
     
    setQuestions(newQuestions)
    setScore(0)    
    setSelectedAnswers([])
    setNumber(0)
    setIsLoading(false)
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    
    <div>
      <h1>Appetizer Games</h1>
      {/* logic to check when not display the start and stop button  */}
      { gameOver || selectedAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startQuiz}>
          Start
        </button>) : null
      }
      {/* we also would show the score if we are not in game over mode*/}
      {!gameOver ? <p className="score">Score :</p> : null}
      
      {/* loading only going to show when we load items */}
      {IsLoading && <p>Loading Questions ...</p> }
      

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
