/**
 * Copyright (c) Wooritech, Inc.
 */

import React from 'react';

import SidebarNote from 'components/SidebarNote';
import useNotes from 'libs/useNotes';

const NoteList = ({ searchText }) => {
  const { data } = useNotes(null);
  const notes = data;

  return notes?.length > 0 ? (
    <ul className="notes-list">
      {notes.map((note) => (
        <li key={note.id}>
          <SidebarNote note={note} />
        </li>
      ))}
    </ul>
  ) : (
    <div className="notes-empty">
      {searchText
        ? `Couldn't find any notes titled "${searchText}".`
        : 'No notes created yet!'}{' '}
    </div>
  );
};

export default NoteList;
