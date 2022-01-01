import React from 'react'

type QuestionCardProps = {
    question: string
    answer: string[]
    callback: any
    selectedAnswer: string
    questionNumber: number
    totalQuestions: number
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    answer,
    callback,
    selectedAnswer,
    questionNumber,
    totalQuestions }) =>{
    return (
        <div>
            Question Card
        </div>
    )
}

export default QuestionCard
