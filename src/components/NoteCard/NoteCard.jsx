const NoteCard = (props) => {
    return (
        <>
        <div className="card">
            <div className="card-header">
                <h1>{props.note.date}</h1>
            </div>
            <div className="card-body">
                <p>{props.note.note}</p>
            </div>

        </div>
        </>

    )
}
 
export default NoteCard;