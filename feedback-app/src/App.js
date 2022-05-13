import { useState } from "react";

import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";

function App(){
    const [feedback, setFeedback] = useState( FeedbackData)

    const addFeedback = (newFeedback) => {
        let maxId = Math.max(...feedback.map( (item) => (item.id)))
        newFeedback.id = maxId + 1
        setFeedback([newFeedback, ...feedback])
    }
    
    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete ${id} item?`)){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
            </div>
        </>
    )
}

export default App;