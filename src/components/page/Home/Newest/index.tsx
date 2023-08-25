import React from 'react';

import MovieList from 'components/share/MovieList';
import { MOVIE_LIST_TYPE } from 'constants/commons';

import styles from './index.module.scss';

const NewestSection = () => {
  return (
    <section className="section container">
      <h2 className={styles.title}>Mới nhất</h2>
      <MovieList type={MOVIE_LIST_TYPE.LOAD_MORE} />
    </section>
  );
};

export default NewestSection;
