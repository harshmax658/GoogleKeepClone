import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const TakeNote = (props) => {
    const [show, setShow] = useState(false);
    const [value, setvalue] = useState({
        title: "",
        note: ""
    });
    const inputEvent = (e) => {
        const { name, value } = e.target;
        setvalue((prevVal) => {
            return {
                ...prevVal, [name]: value
            }
        })
    };
    const addNote = () => {

        if (value.title && value.note !== "") {
            props.renderNote(value)
        }
        else {
            alert("enter all fields")
        }
        setvalue(() => {
            return {
                title: "",
                note: ""
            }
        })
    }
    const expand = () => {
        setShow(true)
    }
    const dExpand = () => {
        setShow(false)
    }
    return (
        <>
            <section className="takeNote" onDoubleClick={dExpand} >
                <form >
                    {show ? <input type="text" placeholder="Enter Title" value={value.title} name="title" onChange={inputEvent} autoComplete="off" /> : null}
                    <textarea name="note" value={value.note} onClick={expand} onChange={inputEvent} placeholder="Write a note" id="" cols="" rows=""></textarea >
                    {show ? <Button className="btn" onClick={addNote}><AddIcon /></Button> : null}
                </form>
            </section>
        </>
    );
};
export default TakeNote;