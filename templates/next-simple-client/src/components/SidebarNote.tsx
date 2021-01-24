/**
 * Copyright (c) Wooritech, Inc.
 */

import { useState, useRef, useEffect } from 'react';
import { format, isToday } from 'date-fns';
import excerpts from 'excerpts';
import marked from 'marked';
import { useLocation } from './LocationContext';

const SidebarNoteItem = ({ id, title, children, expandedChildren }) => {
  const [location, setLocation] = useLocation();
  // const [startTransition, isPending] = unstable_useTransition();
  const isPending = false;
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = id === location.selectedId;

  // Animate after title is edited.
  const itemRef = useRef(null);
  const prevTitleRef = useRef(title);
  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
      itemRef.current.classList.add('flash');
    }
  }, [title]);

  return (
    <div
      ref={itemRef}
      onAnimationEnd={() => {
        itemRef.current.classList.remove('flash');
      }}
      className={[
        'sidebar-note-list-item',
        isExpanded ? 'note-expanded' : '',
      ].join(' ')}
    >
      {children}
      <button
        className="sidebar-note-open"
        style={{
          backgroundColor: isPending
            ? 'var(--gray-80)'
            : isActive
            ? 'var(--tertiary-blue)'
            : '',
          border: isActive
            ? '1px solid var(--primary-border)'
            : '1px solid transparent',
        }}
        onClick={() => {
          setLocation((loc) => ({
            selectedId: id,
            isEditing: false,
            searchText: loc.searchText,
          }));
        }}
      >
        Open note for preview
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <img
            src="chevron-down.svg"
            width="10px"
            height="10px"
            alt="Collapse"
          />
        ) : (
          <img src="chevron-up.svg" width="10px" height="10px" alt="Expand" />
        )}
      </button>
      {isExpanded && expandedChildren}
    </div>
  );
};

const SidebarNote = ({ note }) => {
  const updatedAt = new Date(note.updated_at);
  const lastUpdatedAt = isToday(updatedAt)
    ? format(updatedAt, 'h:mm bb')
    : format(updatedAt, 'yyyy/MM/dd');
  const summary = excerpts(marked(note.body), { words: 20 });
  return (
    <SidebarNoteItem
      id={note.id}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">{summary || <i>(No content)</i>}</p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{note.title}</strong>
        <small>{lastUpdatedAt}</small>
      </header>
    </SidebarNoteItem>
  );
};

export default SidebarNote;
