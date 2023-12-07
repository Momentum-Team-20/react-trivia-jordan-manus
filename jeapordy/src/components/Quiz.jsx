import { useState } from 'react'

export default function Question({ answer, question, value, title
}) {
    // console.log('inside question file')

    const [index, setIndex] = useState(0)



    const nextQuestion = () => {
        console.log('next question pushed')
        setIndex(index + 1)
    }
    return (
        // < div >
        //     <p><b>Subject:</b> {title}</p>
        //     <p><b>Question:</b> {question}</p>
        //     <p><b>Answer:</b> {answer}</p>
        //     <p><b>Point Value:</b> {value}</p>
        // </div >
        <div>
            <Quiz
                question={question}
                correct_answer={answer}
                title={title}
                value={value}
            />
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}

function Quiz({ question, correct_answer, title, value }) {
    const [userInput, setUserInput] = useState("")
    const [score, setUserScore] = useState(0)

    // figure out how to get keyboard input
    console.log('answers: ', correct_answer)


    const addScore = (value) => {
        let new_score = score + value
        setUserScore(new_score)
        console.log('users score ', score)
    }


    const checkAnswer = (userInput) => {
        let userInputLC = userInput.toLowerCase()
        correct_answer = correct_answer.toLowerCase()
        // console.log('lower case correct_answer: ', correct_answer)
        // console.log('lower case user input: ', userInputLC)

        if (userInputLC === correct_answer) {
            window.alert('congrats!')
            addScore(value)
        } else {
            window.alert('wrong')
        }
    }

    const handleInput = event => {
        setUserInput(event.target.value)
        console.log('typed answer: ', userInput)
        // checkAnswer(userInput)
    }

    // allows user to submit input with enter key

    const handleKeyDown = event => {
        console.log('User pressed: ', event.key);
        console.log('user input in use Effect: ', userInput)

        if (event.key === 'Enter') {
            event.preventDefault();

            // 👇️ your logic here
            checkAnswer(userInput);
        }
    }


    return (
        <div>
            <div>
                <p><b>Subject:</b> {title}</p>
                <h2>{question}</h2>
                <label><b>Answer:</b> </label>
                <input className={userInput} onChange={handleInput} onKeyDown={handleKeyDown} />
            </div>
            <div>
                <p><b>Value:</b> {value}</p>
                <p onKeyDown={handleKeyDown}><b>Score:</b> {score}</p>
            </div>
        </div>
    )
}