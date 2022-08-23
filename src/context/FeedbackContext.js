import { createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context 1',
            rating: 10
        },
        {
            id: 2,
            text: 'This item is from context 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This item is from context 3',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {

        },
        edit: false
    })
    
    //delete feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure want to delete??🤨')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    //add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])  //an arr of all the feedback items and the new feedback
    }

    //Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updItem} : item)))
        //if the current item = id being updated,then spread in a new obj of the upadted item; else return the item
    }

    // set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    
    return(
        <FeedbackContext.Provider 
            value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,    //actual state that holds the item and boolean
            updateFeedback
            // parsing the feedback app level state to the components that needs it
            }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext
//exported both the provider and the context