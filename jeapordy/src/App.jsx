import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import Question from './components/Question'


function App() {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState('')

  // gets data from api
  useEffect(() => {
    console.log('use effect runs');
    axios.get('https://jservice.io/api/random?count=10').then((res) => {
      setQuestions(res.data)
      console.log('checking res var', res.data[0])
    })
  }, [])


  // checks to see if a question has already been selected, or sets the quetsion
  const selectQuestion = (question) => {
    console.log('selectQuestion runs');
    setSelectedQuestion(question)
  }

  return (
    <>
      <h1>hello</h1>
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
