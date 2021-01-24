/**
 * Copyright (c) Wooritech, Inc.
 */

import { useState } from 'react';
import { mutate } from 'swr';

import fetcher from './fetcher';

const useMutation = ({ endpoint, method }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [didError, setDidError] = useState(false);
  const [error, setError] = useState(null);
  if (didError) {
    // Let the nearest error boundary handle errors while saving.
    throw error;
  }

  const performMutation = (payload) => {
    setIsSaving(true);
    try {
      mutate(
        '/api/notes',
        fetcher(endpoint, {
          method,
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
          }
        })
      );
    } catch (e) {
      setDidError(true);
      setError(e);
    } finally {
      setIsSaving(false);
    }
  };

  return [isSaving, performMutation];

};

export default useMutation;