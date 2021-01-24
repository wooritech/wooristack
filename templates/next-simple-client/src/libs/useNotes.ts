/**
 * Copyright (c) Wooritech, Inc.
 */

import useSWR from 'swr';

import fetcher from 'libs/fetcher';

const useNotes = (id: null | number) => {
  const { data, error } = useSWR(id ? `/api/notes/${id}` : '/api/notes', fetcher, {
    revalidateOnFocus: true,
  });

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export default useNotes;