import React, { useState } from 'react';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import './kf.css';
import { v4 as uuidv4 } from 'uuid';
export default function KeepForm(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });
  const [focus, setFocus] = useState(false);

  const show = () => {
    setFocus(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addnote = (e) => {
    e.preventDefault();
    props.add({ ...note, key: uuidv4() });
    setNote({
      title: '',
      content: '',
    });
    setFocus(false);
  };
  return (
    <section>
      <form
        onSubmit={addnote}
        style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
      >
        <center>
          {focus ? (
            <input
              style={{ display: 'block' }}
              className="title"
              onChange={handleChange}
              name="title"
              placeholder="Title"
              value={note.title}
            />
          ) : null}
          <center>
            <textarea
              className="content"
              onChange={handleChange}
              name="content"
              placeholder="Create a new note..."
              value={note.content}
              onChange={handleChange}
              onFocus={show}
            />
          </center>
        </center>

        <button className="btn">
          {focus ? (
            <span className="btn-add">add</span>
          ) : (
            <AddCircleIcon fontSize="large" />
          )}
        </button>
      </form>
    </section>
  );
}
