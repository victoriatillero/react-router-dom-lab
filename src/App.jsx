import { useState } from 'react'
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import MailboxList from './components/MailboxList/MailboxList'
import MailboxForm from './components/MailboxForm/MailboxForm'

function App() {

  const [mailboxes, setMailboxes]= useState([])

  const addBox = (newBoxData) => {
    newBoxData._id = mailboxes.length +1
    setMailboxes([...mailboxes,newBoxData])
  }

  return (
    <>
      <NavBar/>
      <h1>Mailbox List</h1>
      <Routes>
        <Route path ='/' element={<h2>Home Page</h2>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        {/* <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/> */}
      </Routes>
    </>
  )
}

export default App
