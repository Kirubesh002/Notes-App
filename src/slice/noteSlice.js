import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    notesList:[],
    selectedNotes:{}
}
const noteSlice = createSlice({
    name:"notes",
    initialState,     //es6 feature key & value same so i give one name 
    reducers:{
        //addNote
        addNotesToList:(state,action)=>{
            const id = Math.floor(Math.random()*100);   //create random id 
            const note = {...action.payload,id, modifiedDate: new Date().toISOString()}       // merrege to action payload with id 
            state.notesList.push(note)  // push to state 

        },
        //removeNote
        removeNoteFromList:(state,action)=>{
            state.notesList = state.notesList.filter((note)=>note.id !== action.payload.id) //filter !== same id 

        },
        //updateNote
        updateNoteInList:(state,action)=>{
            state.notesList = state.notesList.map((note)=>note.id === action.payload.id ? { ...action.payload, modifiedDate: new Date().toISOString() }: note)  
        },
        //selectNote
        setSelectedTask:(state,action)=>{
            state.selectedNotes = action.payload
        }

    }
})

export  const { addNotesToList,removeNoteFromList,updateNoteInList,setSelectedTask} = noteSlice.actions

export default noteSlice.reducer