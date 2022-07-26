import { Link } from "react-router-dom";

const NoteCard = ({note, user, handleDeleteNote}) => {
    return (
        <>
        {/* {user?.profile === note.author._id && */}

        <div className="card">
            <div className="card-header">
                <h1>{note.date}</h1>
            </div>
            <div className="card-body">
                <p>{note.title}</p>
            </div>
            
            <div className="card-footer">
                <button className="btn delete" onClick={()=> handleDeleteNote(note._id)} >X</button>
                <Link className="btn" to="/edit" state={{note}}>Edit</Link>
            </div>
        </div>
        {/* } */}

        </>

    )
}

export default NoteCard;