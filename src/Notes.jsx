import React from 'react';
import Note from './Note';

const Notes =(props)=>{

        let data = localStorage.getItem("data");
        let notesObj;
        if (data == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(data)
        }
        console.log(notesObj)
    return(
        <>
        <section className="notes">
            
            {notesObj.map((element,index)=>{
                
                return (<Note
                 key={index}
                 id={index}
                 title={element.title}
                 note={element.note} 
                 remove={props.remove}/>)
 
            })}
            
        </section>
        </>
    );
};
export default Notes;