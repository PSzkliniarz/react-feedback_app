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

    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const editFeedback = (item) => {
        setfeedbackEdit(
                {
                    item: item,
                    edit: true
                }
        )
    }

    const updateFeedback = ( id, updateItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updateItem} : item)))
        setfeedbackEdit({ item: {}, edit: false})
    }

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
        feedbackEdit,
        editFeedback,
        handleDelete,
        addFeedback,
        updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext