/**
 * Copyright (c) Wooritech, Inc.
 */

/** 노트 리스트 폴백커~ */
const NoteListSuspension = () => {
  return (
    <div>
      <ul className="notes-list skeleton-container">
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
      </ul>
    </div>
  );
};

export default NoteListSuspension;
