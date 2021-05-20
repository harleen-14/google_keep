import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import CreateNote from './CreateNote'
import Note from './Note'
const App = () =>{
    const [addItem,setAddItem] = useState([]);

    const addNote = (note) =>{
        //alert("Clicked");
        setAddItem((prevData)=>{
           return [...prevData,note]
        });
    };
    const onDelete = (id) =>{
        setAddItem((prevNote) =>
            prevNote.filter((currentData,indx)=>{
                return indx!==id;
            })
        );
    };
    return(
    <>
        <Header />
        <CreateNote 
            passNote={addNote}
        />

            {addItem.map((val,index)=>{
            return <Note 
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />
        
        }
        )
        }
    </>
    );
}
export default App;