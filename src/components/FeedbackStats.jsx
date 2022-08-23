import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)  
    
  //Calc Average
    let average = feedback.reduce((acc, cur) => {
      return acc + cur.rating  
    }, 0) / feedback.length //it takes in the a functiion with the current value and accumulator and the defaukt value = 0

    average = average.toFixed(1).replace(/[.,]0$/,'')    //to make sure that it is always 1 dp and replacing it with a regular expression to remove any trailing zeros

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4> 
        {/* to make sure that the value is not NaN */}
    </div>
  )
}

export default FeedbackStats