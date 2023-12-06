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
    const [answer, setAnswer] = useState("")
    // figure out how to get keyboard input

    const checkAnswer = (answer) => {
        if (answer === correct_answer) {
            window.alert('congrats!')
        } else {
            // window.alert('wrong')
        }
    }

    const handleInput = event => {
        setAnswer(event.target.value)
        console.log('typed answer: ', answer)
        checkAnswer(answer)
    }

    // useEffect(() => {
    //     const keyDownHandler = event => {
    //         console.log('User pressed: ', event.key);

    //         if (event.key === 'Enter') {
    //             event.preventDefault();

    //             // 👇️ your logic here
    //             checkAnswer();
    //         }
    //     }

    //     document.addEventListener('keydown', keyDownHandler);

    //     return () => {
    //         document.removeEventListener('keydown', keyDownHandler);
    //     };
    // }, []);

    return (
        <div>

            <h2>{question}</h2>
            <label>Answer: </label>
            <input className='user-answer' onChange={handleInput} />
        </div>
    )
}