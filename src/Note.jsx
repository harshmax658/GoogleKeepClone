import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
const Note = (props) => {
   
    const deleteNote = () => {

        props.remove(props.id);

    }
    return (
        <>

            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.note}</p>
                <Button className="btn noteBtn" onClick={deleteNote}><DeleteOutlineIcon /></Button>
            </div>

        </>
    );
};
export default Note
