import { useState } from 'react'


export default function Quiz({ question, answer, title, value }) {
    const [userInput, setUserInput] = useState("")
    const [score, setScore] = useState(0)

    // figure out how to get keyboard input
    console.log('answers: ', answer)


    // issues with score retaining values
    const addScore = (value) => {
        console.log('new score: ', score)
        console.log('value: ', value)
        setScore(score + 1)
        console.log('score var: ', score)
        // setScore(value)
    }


    const checkAnswer = (userInput) => {
        let userInputLC = userInput.toLowerCase()
        answer = answer.toLowerCase()
        // let answer_LC = answer.toLowerCase()
        console.log('lower case correct_answer: ', answer)
        console.log('lower case user input: ', userInputLC)

        if (userInputLC == answer) {
            window.alert('congrats!')
            addScore(value)
            setScore(score + value)
        } else {
            window.alert('wrong')
        }
    }

    const handleInput = event => {
        setUserInput(event.target.value)
    }

    // allows user to submit input with enter key

    const handleKeyDown = event => {

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
                <input className='user-input' onChange={handleInput} onKeyDown={handleKeyDown} />
            </div>
            <div>
                <p><b>Value:</b> {value}</p>
            </div>
            <div>
                <h1><b>Score:</b> {score}</h1>
            </div>
        </div>
    )
}