import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'
import MailboxDetails from './components/MailboxDetails/MailboxDetails'
import LetterForm from './components/LetterForm/LetterForm'

function App() {

  const [mailboxes, setMailboxes]= useState([])
  const [letters, setLetters]= useState([])

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length +1
    setMailboxes([...mailboxes,newBoxData])
  }
  const addLetter = (newLetterData)=> {
    newLetterData._id = letters.length +1
    setLetters([...letters, newLetterData])
  }
  return (
    <>
      <NavBar/>
      <h1>Mailbox List</h1>
      <Routes>
        <Route path ='/' element={<h2>Home Page</h2>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        <Route path='/mailboxes/:MailboxId' element={<MailboxDetails mailboxes={mailboxes} letters={letters}/>}/>
        <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>}/>
      </Routes>
    </>
  )
}

export default App
