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

  return (
    <>
      <div>
      <NavBar user={user} handleLogout={handleLogout} />
      <main>
      <Routes>
        <Route path="/add" element={<AddNote handleAddNote={handleAddNote} />} />
        <Route path="/" element={<NoteList notes={notes} />} />
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
