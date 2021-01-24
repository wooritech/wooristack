/**
 * Copyright (c) Wooritech, Inc.
 */

import { useState } from 'react';

import NotePreview from 'components/NotePreview';
import { useLocation } from 'components/LocationContext';
import useMutation from 'libs/useMutation';

const NoteEditor = ({ noteId, initialTitle, initialBody }) => {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const [location, setLocation] = useLocation();
  // const [startNavigating, isNavigating] = unstable_useTransition();
  const [isSaving, saveNote] = useMutation({
    endpoint: noteId !== null ? `/api/notes/${noteId}` : `/api/notes`,
    method: noteId !== null ? 'PUT' : 'POST',
  });
  const [isDeleting, deleteNote] = useMutation({
    endpoint: `/api/notes/${noteId}`,
    method: 'DELETE',
  });
  const isNavigating = false;

  const handleSave = () => {
    const payload = { title, body };

    if (typeof saveNote === 'function') saveNote(payload);
  };

  const handleDelete = () => {
    const payload = {};
    if (typeof deleteNote === 'function') deleteNote(payload);
  };

  const isDraft = noteId === null;
  return (
    <div className="note-editor">
      <form
        className="note-editor-form"
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          id="note-body-input"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
      </form>
      <div className="note-editor-preview">
        <div className="note-editor-menu" role="menubar">
          <button
            className="note-editor-done"
            disabled={(isSaving as boolean) || isNavigating}
            onClick={() => {
              handleSave();
            }}
            role="menuitem"
          >
            <img
              src="checkmark.svg"
              width="14px"
              height="10px"
              alt=""
              role="presentation"
            />
            Done
          </button>
          {!isDraft && (
            <button
              className="note-editor-delete"
              disabled={(isDeleting as boolean) || isNavigating}
              onClick={() => {
                handleDelete();
              }}
              role="menuitem"
            >
              <img
                src="cross.svg"
                width="10px"
                height="10px"
                alt=""
                role="presentation"
              />
              Delete
            </button>
          )}
        </div>
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview title={title} body={body} />
      </div>
    </div>
  );
};

export default NoteEditor;
