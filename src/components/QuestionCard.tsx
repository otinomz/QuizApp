import React from 'react'

type QuestionCardProps = {
    question: string
    answer: string[]
    callback: any
    selectedAnswer: string
    questionNumber: number
    totalQuizQuestions: number
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answer,
    callback,
    selectedAnswer,
    questionNumber,
    totalQuizQuestions }) =>{
    return (
        <div>
            <p className="number">
                Question: {questionNumber} / {totalQuizQuestions}
            </p>
        </div>
    )
}

export default QuestionCard
