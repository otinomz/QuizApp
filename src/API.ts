// logic for fetching data from API

export type Question = {
    category: string
    difficulty: string
    correct_answer: string
    incorrect_answers: string[]
    question: string
    type: string
}

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json()
    console.log(data);   
}
