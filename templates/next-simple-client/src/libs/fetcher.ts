/**
 * Copyright (c) Wooritech, Inc.
 */

import fetch from 'isomorphic-unfetch';

const fetcher = async (input: RequestInfo, init?: RequestInit) => {
  const res = await fetch(input, init);
  return res.json();
};

export default fetcher;