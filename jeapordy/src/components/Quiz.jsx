import { useState, useEffect } from 'react'
import axios from 'axios'
import { Questions } from './Question'

export function Quiz() {
    console.log('inside question file')

    const [index, setIndex] = useState(0)
    const [questions, setQuestions] = useState([])
    // const isQuestionEmpty = question.length === 0;
    const [selectedQuestion, setSelectedQuestion] = useState('')


    // gets data from api
    useEffect(() => {
        console.log('use effect runs');
        axios.get('https://jservice.io/api/random?count=10').then((res) => {
            setQuestions(res.data)
            console.log('checking res var', res.data[0])
        })
    }, [])


    const nextQuestion = () => {
        setIndex(index + 1)

    }


    // gets data from api
    useEffect(() => {
        console.log('use effect runs');
        axios.get('https://jservice.io/api/random?count=10').then((res) => {
            setQuestions(res.data)

            // https://jservice.io/api/categories?count=15
        })
    }, [])
    console.log('checking questions var', questions[0].question)


    // checks to see if a question has already been selected, or sets the quetsion
    const selectQuestion = (question) => {
        console.log('selectQuestion runs');
        setSelectedQuestion(question)
    }

    return (
        <>

            {/* {questions.map((question) => (
                <Question
                    // key={questions[index].id}
                    // answer={questions[index].answer}
                    // question={questions[index].question}
                    // value={questions[index].value}
                    // title={questions[index].category.title}
                    key={question.id}
                    answer={question.answer}
                    question={question.question}
                    value={question.value}
                    title={question.category.title}
                    selectQuestion={selectQuestion}
                />
            ))} */}

            <Questions
                key={questions[index].id}
                answer={questions[index].answer}
                question={questions[index].question}
                value={questions[index].value}
                title={questions[index].category.title}
                selectQuestion={selectQuestion}
            />

            <button onClick={nextQuestion}>Next Question</button>
        </>
    )
}




export default Quiz;