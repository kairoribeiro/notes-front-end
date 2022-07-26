import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddNote from './pages/AddNote/AddNote'
import * as noteService from './services/noteService'
import NoteList from './pages/NoteList/NoteList'
import EditNote from './pages/EditNote/EditNote'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [notes, setNotes] = useState([])
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchAllNotes = async () => {
      const noteData = await noteService.getAll()
      setNotes(noteData)
    }
    fetchAllNotes()
  },[])

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddNote = async noteData => {
    const newNote = await noteService.create(noteData)
    setNotes([...notes, newNote])
    navigate('/')
  }

  const handleDeleteNote = async noteId => {
    const deletedNote = await noteService.deleteNote(noteId)
    const newNotesArray = notes.filter(note => note._id !== deletedNote._id)
    setNotes(newNotesArray)
    navigate('/')
  }

  const handleUpdateNote = async (noteData) => {
    const updatedNote = await noteService.updateNote(noteData)
    const newNotesArray = notes.map(note => note._id === updatedNote._id ? updatedNote : note)
    // use array to set state
    setNotes(newNotesArray)
    navigate('/')
  }

  return (
    <>
      <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
      <Routes>
        <Route path="/add" element={<AddNote handleAddNote={handleAddNote} />} />
        <Route path="/edit" element={<EditNote handleUpdateNote={handleUpdateNote} />} />
        <Route path="/" element={<NoteList user={user} notes={notes} handleDeleteNote={handleDeleteNote} />} />
        <Route path="/signup" element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}/>
        <Route path="/login"element={<Login handleSignupOrLogin={handleSignupOrLogin} />}/>
        <Route path="/profiles" element={user ? <Profiles /> : <Navigate to="/login" />}/>
        <Route path="/changePassword"
          element={
            user ? (
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
      </main>


      </div>
     
    </>
  )
}

export default App
