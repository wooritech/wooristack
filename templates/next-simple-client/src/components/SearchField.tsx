/**
 * Copyright (c) Wooritech, Inc.
 */

import React, { useState } from 'react';
import Spinner from './Spinner';
import { useLocation } from './LocationContext';

const SearchField = () => {
  const [, setLocation] = useLocation();
  const [text, setText] = useState('');
  const isSearching = false;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    setText(newText);
    setLocation((loc) => ({
      ...loc,
      searchText: newText,
    }));
  };

  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label className="offscreen" htmlFor="sidebar-search-input">
        Search for a note by title
      </label>
      <input
        id="sidebar-search-input"
        placeholder="Search"
        value={text}
        onChange={onChange}
      />
      <Spinner active={isSearching} />
    </form>
  );
};

export default SearchField;
