const NoteCard = (props) => {
    return (
        <>
        {/* {props.user?.profile === props.note.author._id && */}

        <div className="card">
            <div className="card-header">
                <h1>{props.note.date}</h1>
            </div>
            <div className="card-body">
                <p>{props.note.title}</p>
            </div>
            
            <div className="card-footer">
                <button onClick={()=> props.handleDeleteNote(props.note._id)} >X</button>
            </div>
        </div>
        {/* } */}

        </>

    )
}

export default NoteCard;