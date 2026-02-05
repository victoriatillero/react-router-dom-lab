import { useParams } from "react-router";

const MailboxDetails = (props) => {
    console.log(props)
    const { MailboxId } = useParams()
    console.log('mailbox ID:', MailboxId)

    const mailbox = props.mailboxes.find((mailbox)=>
        mailbox._id === Number(MailboxId)
    )
    const mailboxLetters = props.letters.filter(
    (letter) => Number(letter.mailboxId) === mailbox._id
  );
    return (
        <>
            <h2> mailbox {mailbox._id} details</h2>
            <dl>
                <dt>Boxholder: {mailbox.boxHolder}</dt>
                <dt>Box Size: {mailbox.boxSize}</dt>
            </dl>
            <h2>Letters </h2>
            {mailboxLetters.length===0 ? (
                <p>no letters yet. </p>
            ):(
                <ul>
                    {mailboxLetters.map((letter)=> (
                        <li key={letter._id}>
                            {letter.message}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default MailboxDetails
