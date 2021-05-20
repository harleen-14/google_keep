import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Note = (props) =>{

    const dltNote = () =>{
        props.deleteItem(props.id);
    }
    return(
    <>
        <div className="note">
        <h3 id="title" >{props.title}</h3>
        
        <hr />
        <br />
        <p id="para">{props.content}</p>
        <button className="btnNotes" onClick={dltNote}><DeleteIcon className="dlt_icon"/></button>
        </div>
    </>
    );
}
export default Note;