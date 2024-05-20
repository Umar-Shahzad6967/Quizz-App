import React from 'react'
import jsPDF from 'jspdf'

function QuizResult(props) {
    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.text(`Your Score: ${props.score}`, 10, 10);
        doc.text(`Total Score: ${props.totalScore}`, 10, 20);
        doc.save('quiz_result.pdf');
    }

    return (
        <>
            <div className='show-score'>
                Your Score: {props.score}<br />
                Total Score: {props.totalScore}
            </div>
            <button id="next-button" onClick={props.tryAgain}>Try Again</button>
            <button className='pdf' onClick={downloadPDF}>Download PDF</button>
        </>
    )
}

export default QuizResult
