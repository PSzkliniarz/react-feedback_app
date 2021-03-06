import {createContext, useState, useEffect} from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
    useEffect(() => {
        fetchFeedback()
    }, [])

    // fetch data from backend
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    const updateFeedback = async ( id, updateItem) => {
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        const data = await response.json()

        setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...data} : item)))
        setfeedbackEdit({ item: {}, edit: false})
    }

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure you want to delete ${id} item?`)){

            await fetch(`feedback/${id}`, {method: 'DELETE'})

            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
            })

        const data = await response.json()

        setFeedback([data, ...feedback])
    }

    return <FeedbackContext.Provider 
    value={{
        feedback,
        feedbackEdit,
        isLoading,
        editFeedback,
        handleDelete,
        addFeedback,
        updateFeedback
        }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext