/**
 * Copyright (c) Wooritech, Inc.
 */
import { useLocation } from './LocationContext';

const EditButton = ({ noteId, children }) => {
  const [, setLocation] = useLocation();
  const isDraft = noteId == null;
  const isPending = false;

  return (
    <button
      className={[
        'edit-button',
        isDraft ? 'edit-button--solid' : 'edit-button--outline',
      ].join(' ')}
      disabled={isPending}
      onClick={() => {
        setLocation((loc) => ({
          selectedId: noteId,
          isEditing: true,
          searchText: loc.searchText,
        }));
      }}
      role="menuitem"
    >
      {children}
    </button>
  );
};

export default EditButton;
