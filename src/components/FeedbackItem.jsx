import React from 'react'
// import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

//component based state
function FeedbackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)  //whatever we want from the feedback context
    // const [rating, setRating] = useState(8)
    // const [text, setText] = useState('This is a cool example of a feedback item')

    // const handleClick = () => {
    //     setRating((prev) => {
    //         return prev + 1;
    //     })
    // }
 

  return (
    <Card reverse= {false}>
        <div className="num-display">{item.rating}</div>
        <button onClick= {() => deleteFeedback(item.id)} className="close">
            <FaTimes color='purple'/>
        </button>
        <button onClick= {() => editFeedback(item)} className="edit">
          <FaEdit color='blue' />
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click Me!</button> */}
    </Card>   
  )
}

export default FeedbackItem