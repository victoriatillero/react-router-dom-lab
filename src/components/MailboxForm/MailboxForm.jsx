import { useState } from "react";
import { useNavigate } from "react-router";

const initialState = {
    boxHolder: '',
    boxSize:'',
}
const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState)

    const navigate=useNavigate()

    const handleSubmit= (event) => {
        event.preventDefault()
        props.addBox(formData)
        setFormData(initialState)
        navigate('/mailboxes')
    }
    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
return (
    <main>
        <h2>New Mailbox</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxHolder">Enter a boxholder:</label>
            <input type="text" name="boxHolder" id="boxHolder" value={formData.boxHolder} onChange={handleChange} />
            <label htmlFor="size">Select a box size</label>
            <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </main>
)
}
export default MailboxForm
