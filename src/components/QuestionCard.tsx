import React from 'react'

import {AnswerObject} from "../App"

type QuestionCardProps = {
    question: string
    answers: string[]
    callbackFunction: (e: React.MouseEvent<HTMLButtonElement>) => void
    selectedAnswer: AnswerObject | undefined
    questionNumber: number
    totalQuizQuestions: number
} 

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answers,
    callbackFunction,
    selectedAnswer,
    questionNumber,
    totalQuizQuestions }) =>{
    return (
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuizQuestions}
            </p>

            <p dangerouslySetInnerHTML={{ __html: question }} />
            
            <div>
                { answers.map((answer) => (
                    <div key={answer} >
                        <button disabled={selectedAnswer ? true : false} value={answer} onClick={callbackFunction}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
                
            </div>
        </div>
    ) 
}

export default QuestionCard
