import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Question from './components/Question'
import QuestionDetails from './components/QuestionDetails'

function App() {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState('')

  useEffect(() => {
    console.log('use effect runs');
    axios.get('https://jservice.io/api/random?count=50').then((res) => {
      setQuestions(res.data)
    })
  }, [])



  const selectQuestion = (question) => {
    console.log('selectQuestion runs');
    setSelectedQuestion(question)
  }

  return (
    <>
      <br></br>
      {questions.map((question) => (
        <Question
          key={question.id}
          answer={question.answer}
          question={question.question}
          value={question.value}
          title={question.category.title}
          selectQuestion={selectQuestion}
        />
      ))}
    </>
  )
}

export default App
