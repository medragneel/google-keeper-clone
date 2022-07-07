import React, { useState } from 'react';
import notes from './notes';
import KeepForm from './keepForm';
import SortedItem from './sortableList';
import './kpl.css';
export default function KeepList(props) {
  const [n, setNotes] = useState(notes);
  const addNote = (val) => setNotes([...n, val]);
  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((note) => id !== note.key);
    });
  };
  const edit = (id, newtitle, newcontent) => {
    const updatedNotes = n.map((note) =>
      id === note.key ? { ...note, title: newtitle, content: newcontent } : note
    );
    return setNotes(updatedNotes);
  };
  return (
    <div>
      <KeepForm add={addNote} />
      <br />
      <br />
      <div className="KeepList">
        <SortedItem
          key={n.key}
          n={n}
          addNote={addNote}
          deletenote={deleteNote}
          e={edit}
          id={n.key}
        />
      </div>
    </div>
  );
}
