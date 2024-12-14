import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNoteInList } from "../../slice/noteSlice";
import { removeNoteFromList } from "../../slice/noteSlice";

const Model = ({ onHide }) => {
  const dispatch = useDispatch();
  const { selectedNotes } = useSelector((state) => state.notes);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);

  const updateNote = () => {
    onHide();
    dispatch(updateNoteInList({ id, title, description }));
  };

  useEffect(() => {
    if (Object.keys(selectedNotes).length !== 0) {
      setTitle(selectedNotes.title);
      setDescription(selectedNotes.description);
      setId(selectedNotes.id);
    }
  }, [selectedNotes]);

  const deleteNote = () => {
    dispatch(removeNoteFromList({ id }));
    onHide();
  };

  return (
    <div
      className="modelB"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: " rgb(32 45 69 / 45%)",
        paddingTop: "50px",
        zIndex: "111",
      }}
    >
      <div className="model-container">
        <div className="model">
          <div className="model-input-group">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Update Title"
             className="model-input"
            />
          </div>
          <div className="model-input-group">
          <textarea
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Update Description"
            className="model-input"
          ></textarea>
          </div>
          <div className="model-buttons" style={{ justifyContent: "flex-end" }}>
            <button
             className="model-btn  save-btn"
              onClick={updateNote}
            >
              Save
            </button>
            <button
              className="model-btn  close-btn"
              onClick={deleteNote}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
