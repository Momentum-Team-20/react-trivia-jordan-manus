import { useState, useEffect } from 'react'

export default function Question({
    key, answer, question, value, title
}) {
    console.log('inside question file')

    const [questionIndex, setQuestionIndex] = useState(0)
    const isQuestionEmpty = question.length === 0;


    const handleNextQuestion = () => {
        setQuestionIndex(questionIndex + 1)
    }
    return (
        // < div >
        //     <p><b>Subject:</b> {title}</p>
        //     <p><b>Question:</b> {question}</p>
        //     <p><b>Answer:</b> {answer}</p>
        //     <p><b>Point Value:</b> {value}</p>
        // </div >
        <div>
            <h1>hellow from the question</h1>
            <Quiz
                question={question}
                correct_answer={answer}
            />
            <button>Next Question</button>
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
            <h1>hello from the quiz</h1>
            <h2>{question}</h2>
            <label>Answer: </label>
            <input className='user-answer' onChange={handleInput} />
        </div>
    )
}


