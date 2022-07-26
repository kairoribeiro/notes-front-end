import { Link } from "react-router-dom";
import styles from './NoteCard.module.css'

const NoteCard = ({note, user, handleDeleteNote}) => {
    return (
        <>
        {/* {user?.profile === note.author._id && */}
        <div className="card">
            <div className="card-header">

            </div>
            <div className="card-body">
                <p>{note.title}</p>
            </div>
            
            <div className="card-footer">
                <button className="btn delete" onClick={()=> handleDeleteNote(note._id)} >X</button>
                <Link className="btn" to="/edit" state={{note}}>See Note</Link>
            </div>
        </div>
        {/* } */}

        </>

    )
}

export default NoteCard;