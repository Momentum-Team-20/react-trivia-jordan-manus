import './App.css'
import axios from 'axios'
// import Question from './components/Question'
import Quiz from './components/Quiz'
// import { Quiz } from './components/Quiz'
import { useState, useEffect } from 'react'


function App() {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState('')
  const [index, setIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // gets data from api
  useEffect(() => {
    console.log('use effect runs');
    axios.get('https://jservice.io/api/random?count=10').then((res) => {
      setLoading(false)
      setQuestions(res.data)
      console.log('checking res var', res.data[0])
    })
  }, [])


  // checks to see if a question has already been selected, or sets the quetsion
  const selectQuestion = (question) => {
    console.log('selectQuestion runs');
    setSelectedQuestion(question)
  }

  const previousQuestion = () => {
    console.log('previous question pushed')
    setIndex(index - 1)
  }

  const nextQuestion = () => {
    console.log('next question pushed')
    setIndex(index + 1)
  }

  if (loading) {
    return <h1>Loading</h1>
  }

  return (
    <>
      <Quiz
        key={questions[index].id}
        answer={questions[index].answer}
        question={questions[index].question}
        value={questions[index].value}
        title={questions[index].category.title}
        selectQuestion={selectQuestion}
      />

      <button disabled={index === 0} onClick={nextQuestion}>Previous Question</button>
      <button disabled={index === questions.length - 1} onClick={nextQuestion}>Next Question</button>

    </>
  )
}
export default App