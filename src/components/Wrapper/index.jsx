import React from 'react';

import css from './index.module.css';

const Wrapper = ({ children }) => {
  return <div className={css.root}>{children}</div>;
};

export default Wrapper;
