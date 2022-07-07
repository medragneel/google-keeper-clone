import React, { useState, useContext } from 'react';
import { ThemeContext } from './context/themecontext';
import './edit.css';
export default function Edit(props) {
  const { isDark } = useContext(ThemeContext);
  const [focus, setFocus] = useState(false);
  const [editNote, setEditNote] = useState({
    editTitle: props.title,
    editContent: props.content,
  });
  const show = () => {
    setFocus(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const reset = () => setEditNote({ editTitle: '', editContent: '' });
  const styles = {
    backgroundColor: isDark ? '#333' : '#f2f2f2',
    color: isDark ? '#f2f2f2' : '#333',
  };
  return (
    <>
      <form
        style={styles}
        className="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.editnote(props.id, editNote.editTitle, editNote.editContent);
          reset();
          props.Toggle();
        }}
      >
        <center>
          <input
            style={styles}
            className="edit-title"
            onChange={handleChange}
            name="editTitle"
            placeholder="Title"
            value={editNote.editTitle}
          />
          <center>
            <textarea
              style={styles}
              className="edit-content"
              onChange={handleChange}
              name="editContent"
              placeholder="edit a note..."
              onChange={handleChange}
              value={editNote.editContent}
            />
          </center>
        </center>
        <button style={styles} className="edit-btn" type="submit">
          edit
        </button>
        <span style={styles} onClick={props.Toggle} className="fermer">
          cancel
        </span>
      </form>
    </>
  );
}
