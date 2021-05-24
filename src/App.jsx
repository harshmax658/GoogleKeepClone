import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import TakeNote from './TakeNote';
import Notes from './Notes';
const App = () => {
    const [notes, setNotes] = useState([]);

    const renderNote = (note) => {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        });
        
        let data = localStorage.getItem("data");
        let notesObj;
        if (data == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(data)
        }

        notesObj.push(note);
        localStorage.setItem("data", JSON.stringify(notesObj));

    }
    const remove = (id) => {
        let data = localStorage.getItem('data');
        let notesObj = JSON.parse(data);
        notesObj.splice(id, 1);
        localStorage.setItem('data', JSON.stringify(notesObj))
    }

    return (
        <>
            <Header />
            <TakeNote renderNote={renderNote} />

            <Notes  remove={remove} />

            <Footer />
        </>
    )
}

export default App;