import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from './AddNote.module.css'


const AddNote = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        note: '',
    })
    
    const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
          props.handleAddNote(formData)
          navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

    const {title, note} = formData

    const isFormInvalid = () => {
    return !(title && note)
  }


    return (
    <>
    <h1>Add Note</h1>

    <form onSubmit={handleSubmit} autoComplete='off'>

    <div className=''>
        <label htmlFor="title" className=''>Title </label>
        <input type="text" autoComplete="off" id="title" value={title} name="title" onChange={handleChange}/>
    </div>

    <div className=''>
        <label htmlFor="note" className=''>Note </label>
        <textarea  autoComplete="off" id="note" value={note} name="note" onChange={handleChange}/>
    </div>

    <div className='btn'>
        <button disabled={isFormInvalid()} className={styles.button}>Save Note</button>
    </div>

    </form>
    </>
    )
}

export default AddNote;