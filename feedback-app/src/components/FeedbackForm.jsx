import { useState } from "react"
import Card from "./shared/Card"
import RatingSelect from "./RatingSelect"
import Button from "./Button"

function FeedbackForm({handleAdd}) {
    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState('')

    const handlerTextChange = (e) => {
        if (text === ''){
            setMessage(null)
            setbtnDisabled(true)
        } else if (text !== '' && text.trim().length <= 10){
            setbtnDisabled(true)
            setMessage('Message is to short')
        } else {
            setbtnDisabled(false)
            setMessage(null)
        }
        setText(e.target.value);
    }

    const test = (e) => {
        alert("clientX value: " + e.clientX + "\n")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback);
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How are you rate our service?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input 
                type='text'
                placeholder="Write your opinion"
                onChange={handlerTextChange}
                value={text}
                ></input>
                <Button type='submit' version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div onClick={test} className="message">Message mast have at last 10 characters</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm