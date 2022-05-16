import {createContext, useState} from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(
        [
            ...FeedbackData,
            {
                id: 3,
                text: 'This is item from context',
                rating: 2
            },
            {
                id: 4,
                text: 'This is second item from context',
                rating: 6
            },
        ]
    )

    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete ${id} item?`)){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        let maxId = Math.max(...feedback.map( (item) => (item.id)))
        newFeedback.id = maxId + 1
        setFeedback([newFeedback, ...feedback])
    }

    return <FeedbackContext.Provider 
    value={{
        feedback,
        handleDelete,
        addFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext