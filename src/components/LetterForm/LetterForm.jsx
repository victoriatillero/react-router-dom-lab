import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
    mailboxId: '',
    recipient: '',
    message:''
}
const LetterForm = (props) => {
    const [letterData, setLetterData] =useState(initialState)
    const navigate = useNavigate()

    const handleSubmit= (event) => {
        event.preventDefault()
        props.addLetter(letterData)
        setLetterData(initialState)
        navigate('/mailboxes')
    }
    const handleChange = (event) => {
        setLetterData({...letterData, [event.target.name]:event.target.value})
    }


return(
    <main>
        <h2>New Letter</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mailboxId">Select Mailbox</label>
            <select name="mailboxId" id="mailboxId" value={letterData.mailboxId} onChange={handleChange}>
                <option value="">Select a mailbox</option>
                {props.mailboxes.map((mailbox)=> (
                    <option key={mailbox._id} value={mailbox._id}>Mailbox {mailbox._id}</option>
                ))}
            </select>
            <label htmlFor="recipient">Recipient:</label>
            <input type="text" name="recipient" id="recipient" value={letterData.recipient} onChange={handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name='message' id="message" value={letterData.message} onChange={handleChange}/>
            <button type="submit">Send Letter</button>
        </form>
    </main>
);

}

export default LetterForm
