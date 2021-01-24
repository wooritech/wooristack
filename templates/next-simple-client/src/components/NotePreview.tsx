/**
 * Copyright (c) Wooritech, Inc.
 */

import TextWithMarkdown from './TextWithMarkdown';

const NotePreview = ({ title, body }) => {
  return (
    <div className="note-preview">
      <TextWithMarkdown text={body} />
    </div>
  );
};

export default NotePreview;
