import { useState, useEffect } from 'react'

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
            />
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}

function Quiz({ question, correct_answer }) {
    const [userInput, setUserInput] = useState("")
    // figure out how to get keyboard input

    const checkAnswer = (userInput) => {
        if (userInput === correct_answer) {
            window.alert('congrats!')
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

            <h2>{question}</h2>
            <label>Answer: </label>
            <input className={userInput} onChange={handleInput} onKeyDown={handleKeyDown} />
        </div>
    )
}