export default function Question({
    key, answer, question, value, title
}) {
    console.log('inside question file')
    return (
        // < h2 > Inside { question } function</h2 >
        < div >
            <p><b>Subject:</b> {title}</p>
            <p><b>Question:</b> {question}</p>
            <p><b>Answer:</b> {answer}</p>
            <p><b>Point Value:</b> {value}</p>
        </div >

    )
}


