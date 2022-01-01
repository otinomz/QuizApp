import React from 'react'

type QuestionCardProps = {
    question: string
    answers: string[]
    callbackFunction: any
    selectedAnswer: any
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
                { answers.map(answer => (
                    <div>
                        <button disabled={selectedAnswer} onClick={callbackFunction}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
                
            </div>
        </div>
    ) 
}

export default QuestionCard
