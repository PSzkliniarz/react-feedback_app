import { useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackData from "./data/FeedbackData";

import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

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
        <Router>
            <Header/>
            <div className="container">
                <Routes>
                <Route 
                exact
                path='/'
                element={
                    <>
                        <FeedbackForm handleAdd={addFeedback} />
                        <FeedbackStats feedback={feedback} />
                        <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
                    </>
                }>  
                </Route>
                <Route path='/about' element={<AboutPage /> } />
                </Routes>
            </div>
            <AboutIconLink />
        </Router>
    )
}

export default App;