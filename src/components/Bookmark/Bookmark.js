import React, { useState } from 'react';
import styles from './Bookmark.module.scss';

const Bookmark = ({ bookmark, deleteBookmark }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(bookmark.title);
  const [url, setUrl] = useState(bookmark.url);

  const goButtonIconUrl = 'https://cdn0.iconfinder.com/data/icons/command-buttons/512/Arrow_Right-512.png';
  const editButtonIconUrl = 'https://icons.iconarchive.com/icons/brainleaf/free-pencil/128/pencil-grey-icon.png';
  const deleteButtonIconUrl = 'https://cdn0.iconfinder.com/data/icons/command-buttons/512/Minus-512.png';
  const saveButtonIconUrl = 'https://cdn0.iconfinder.com/data/icons/ie_Bright/512/disk_save.png';

  return (
    <div className={styles.bookmarkContainer}>
      {editMode ? (
        <>
          <input
            className={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className={styles.input}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className={styles.saveButton} onClick={() => setEditMode(false)}>
            <img src={saveButtonIconUrl} alt="Save" className={styles.icon} />
          </button>
        </>
      ) : (
        <>
          <div className={styles.titleWithIcon}>
            <h4>{title}</h4>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
              <img src={goButtonIconUrl} alt="Go" className={styles.icon} />
            </button>
            <button className={styles.button} onClick={() => setEditMode(true)}>
              <img src={editButtonIconUrl} alt="Edit" className={styles.icon} />
            </button>
            <button className={styles.button} onClick={() => deleteBookmark(bookmark._id)}>
              <img src={deleteButtonIconUrl} alt="Delete" className={styles.icon} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Bookmark;
