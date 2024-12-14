import React, { useState } from "react";
import { addNotesToList } from "../../slice/noteSlice";
import { useDispatch } from "react-redux";

function AddNotes({onHide}) {
    const dispatch =useDispatch()
  const [title,setTitle]  = useState("")
  const [ description, setDiscriprition] = useState("") 

  const addNote =()=>{
    dispatch(addNotesToList({title,description}))
    onHide()
    setTitle("")
    setDiscriprition("")
  }
  const close=()=>{
    onHide()
  } 
  return (
    <>
<div className="modelB" style={{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:" rgb(32 45 69 / 45%)",
  paddingTop:"50px",zIndex:"111"
}}>
           
  
      <div className='model-container'>
      <div className="card-title fw600">Add Notes</div>
      <div className="model">
        <div className="model-input-group">
          <input type="text"
            className="model-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="model-input-group">
          <textarea

            placeholder="Description"
            className="model-input"
            value={description}
            onChange={(e) => setDiscriprition(e.target.value)}
            name="" id=""
            rows={6}

          ></textarea>
        </div>
        <div className="model-buttons" style={{ justifyContent: "flex-end" }}>
          <button className="model-btn  save-btn" onClick={addNote}>Add</button>
          <button className="model-btn close-btn" onClick={close}>Cancle</button>
        </div>
      </div>
    </div>
    
      </div>
    </>
     
  );
}

export default AddNotes;
