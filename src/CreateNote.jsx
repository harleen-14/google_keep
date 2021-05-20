import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
const CreateNote = (props) =>{
    const [expand,setExtend]=useState(false)
    const ExpandIt = () =>{
        setExtend(true);
    }
    const shrinkIt = () =>{
        setExtend(false);
    }
    const [note,setNote] = useState({
        title: "",
        content : ""    
    });
   const inputEvent =(event)=>{
       const {name,value} = event.target
       setNote((prevData)=>{
           return {
               ...prevData,
               [name]: value,

           };
       });

   };

   const addEvent =()=>{
       props.passNote(note);
       setNote({
        title: "",
        content: "",
    })
   };
    return(
    <>
    <div className="main_div" onDoubleClick={shrinkIt}  onClick={ExpandIt}>
    <form>
    <br />
    {expand ?
        <input type="text" 
                name="title"
                placeholder="Title"
                onChange={inputEvent}
                value={note.title}
                autoComplete="off"/>
                : null}
        <br />
        <br />
        <textarea
                rows=""
                column=""
                name="content" 
                placeholder="Write a note..."
                onChange={inputEvent}
                value={note.content}
                autoComplete="off"
               
                
                />
                <div>
                {expand?
        <Button  onClick={addEvent}>
            < AddIcon className="btn1" style={{ fontSize: 50 }} />
        </Button>
        :null}
        </div>
    </form>

    </div>
        
    </>
    );
};
export default CreateNote;