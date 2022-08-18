import React from 'react'
// import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes } from 'react-icons/fa'

//component based state
function FeedbackItem({ item, handleDelete }) {
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
        <button onClick= {() => handleDelete(item.id)} className="close">
            <FaTimes color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
        {/* <button onClick={handleClick}>Click Me!</button> */}
    </Card>   
  )
}

export default FeedbackItem