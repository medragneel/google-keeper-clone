import React, { useContext } from 'react';
import KeepItem from './keepItem';
import './kpl.css';
export default function SortedItem(props) {
  return (
    <div>
      <ol>
        {props.n.map((note) => {
          return (
            <KeepItem
              className="keepItem"
              key={note.key}
              id={note.key}
              del={props.deletenote}
              title={note.title}
              content={note.content}
              edit={props.e}
            />
          );
        })}
      </ol>
    </div>
  );
}
