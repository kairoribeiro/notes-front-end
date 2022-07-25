import NoteCard from "../../components/NoteCard/NoteCard";
import styles from "./NoteList.module.css"


const NoteList = (props) => {
    return (
    <>
    <h1>Notes</h1>
    <div>
    {props.notes.map(note =>
        <NoteCard key={note._id} note={note}/>
    )}
    </div>
    </>

    )
}

export default NoteList;