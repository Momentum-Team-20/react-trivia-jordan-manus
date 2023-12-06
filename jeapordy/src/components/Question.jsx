import { useState } from 'react'

// export default function Question({
//     key, answer, question, value, title
// }) {
//     console.log('inside question file')

//     const [questionIndex, setQuestionIndex] = useState(0)
//     // const isQuestionEmpty = question.length === 0;



//     const nextQuestion = () => {
//         setQuestionIndex(questionIndex + 1)
//     }
//     return (
//         // < div >
//         //     <p><b>Subject:</b> {title}</p>
//         //     <p><b>Question:</b> {question}</p>
//         //     <p><b>Answer:</b> {answer}</p>
//         //     <p><b>Point Value:</b> {value}</p>
//         // </div >
//         <div>
//             <h1>hello from the question</h1>
//             <Quiz
//                 question={question}
//                 correct_answer={answer}
//             />
//             <button onClick={nextQuestion}>Next Question</button>
//         </div>
//     )
// }

export function Questions(answer, question, value, title) {
    const [userInput, setUserInput] = useState("")
    // figure out how to get keyboard input

    const checkAnswer = (userInput) => {
        if (userInput === answer) {
            window.alert('congrats!')
        } else {
            // window.alert('wrong')
        }
    }

    const handleInput = event => {
        setUserInput(event.target.value)
        console.log('typed answer: ', userInput)
        checkAnswer(userInput)
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


export default Questions;