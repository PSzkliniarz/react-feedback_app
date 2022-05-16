import {createContext, useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, useFeedback] = useState(
        [
            {
                id: 1,
                text: 'This is item from context',
                rating: 2
            },
            {
                id: 2,
                text: 'This is second item from context',
                rating: 6
            },
        ]
    )

    return <FeedbackContext.Provider value={{feedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext