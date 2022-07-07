import React, { useState, useContext } from 'react';
import Edit from './editmode';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeContext } from './context/themecontext';
import './kf.css';
const KeepItem = (props) => {
  const { isDark } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDark ? '#222' : '#f2f2f2',
    color: isDark ? '#f2f2f2' : '#222',
  };
  const [isedit, setEdit] = useState(false);
  const Toggle = () => {
    setEdit(!isedit);
  };
  const d = () => props.del(props.id);
  return (
    <li style={styles}>
      {isedit ? (
        <Edit
          id={props.id}
          title={props.title}
          content={props.content}
          Toggle={Toggle}
          editnote={props.edit}
        />
      ) : (
        <div
          style={{ position: 'relative ' }}
          onClick={Toggle}
          className="keepItem"
        >
          <h2>{props.title}</h2>
          <p>{props.content}</p>
          <DeleteIcon
            style={{ color: isDark ? '#f2f2f2' : '#222' }}
            onClick={d}
            className="btn-del"
          />
        </div>
      )}
    </li>
  );
};

export default KeepItem;
