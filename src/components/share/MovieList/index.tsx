import React from 'react';

import { MOVIE_LIST_TYPE } from 'constants/commons';

import styles from './index.module.scss';
import MovieItem from '../MovieItem';

type Props = {
  type: MOVIE_LIST_TYPE.LOAD_MORE | MOVIE_LIST_TYPE.INFINITY_SCROLL  
};

const data = [
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
  { title: 'Già thiên', slug: 'gia-thien', thumbnail: 'https://hhhkungfu.tv/wp-content/uploads/Gia-Thien2-300x449.jpg', newestUpdate: 'Tập 1 - 2' },
];

const MovieList = ({ type }: Props) => {
  
  return (
    <div className={styles.container}>
      {data.map((movie, index) => <MovieItem key={`${index}-${movie.slug}`} movie={movie} />)}
    </div>
  );
};

export default MovieList;
