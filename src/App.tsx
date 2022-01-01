import React, { useState } from 'react'
import QuestionCard from './components/QuestionCard'
import { Difficulty, QuestionState, fetchQuizQuestions } from './API'
// styles
import { GlobalStyle } from './App.styles'

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QUESTIONS = 15

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
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
    if (!gameOver) {
      // get users selected answers from
      const answer = e.currentTarget.value
      // check answer against correct answers
      const correct = questions[number].correct_answer === answer
      // add score if answer is correct
      if (correct) setScore(previous => previous + 1)
      
      // save answer in the array for selected answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setSelectedAnswers((previous) => [...previous, answerObject])
    }
  }

  // next Question
  const nextQuestion = () => {
    // move on to the next question logic
    const nextQuestion = number + 1

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
      < GlobalStyle/>
      <div>
        <h1>Appetizer Games</h1>
        {/* logic to check when not display the start and stop button  */}
        { gameOver || selectedAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>) : null
        }
        {/* we also would show the score if we are not in game over mode*/}
        {!gameOver ? <p className="score">Score : {score }</p> : null}
        
        {/* loading only going to show when we load items */}
        {isLoading && <p>Loading Questions ...</p> }
        
        {/* questions only going to show if we are not loading or in game over */}
        {/* logic in short circuit */}
        { !isLoading && !gameOver && (
            <QuestionCard
            question={questions[number].question} 
            answers={questions[number].answers} 
            callbackFunction={checkAnswer}
            selectedAnswer={selectedAnswers ? selectedAnswers[number] : undefined }
            questionNumber={number + 1} 
            totalQuizQuestions={TOTAL_QUESTIONS}
            />
          ) 
        }
        
        {/* next button logic */}
        { !gameOver && !isLoading && selectedAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 &&( 
          <button className="next" onClick={nextQuestion}>
            Next Question
          </button>)
        }
      </div>
    </>
  )
}

export default App
