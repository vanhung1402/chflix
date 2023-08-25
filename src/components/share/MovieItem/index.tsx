/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { HeartIcon, PlayIcon } from 'assets/icons';

import styles from './index.module.scss';
import classNames from 'classnames';

const ICON_PLAY_SIZE = 48;
const ICON_HEART_SIZE = 32;

type Props = {
  movie: MovieType;
};

const MovieItem = ({ movie }: Props) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleClickBookmark = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const bookmarkedMovies = JSON.parse(localStorage.getItem('items') || '[]');
    let newBookmarkedMovies = [];

    if (bookmarked) {
      newBookmarkedMovies = bookmarkedMovies.filter((movieItem: MovieType) => movie.slug !== movieItem.slug);
    } else {
      newBookmarkedMovies = [...bookmarkedMovies, movie.slug];
    }

    setBookmarked(!bookmarked);
    localStorage.setItem('bookmarkedMovies', JSON.stringify(newBookmarkedMovies));
    console.log('newBookmarkedMovies: ', newBookmarkedMovies);
  };

  useEffect(() => {
    const bookmarkedMovies = JSON.parse(localStorage.getItem('bookmarkedMovies') || '[]');

    const hadBookmark = bookmarkedMovies.find((movieSlug: string) => movie.slug === movieSlug);
    setBookmarked(!!hadBookmark);
  }, []);

  return (
    <Link href={movie.slug} className={styles.movieItem}>
      <img className={styles.thumbnail} src={movie.thumbnail} alt={movie.title} loading="lazy" />
      <div className={styles.topActions}>
        <span className={styles.newestUpdate}>{movie.newestUpdate}</span>
        <button className={classNames(styles.btnBookmark, {[styles.isBookmarked]: bookmarked})} onClick={handleClickBookmark}>
          <HeartIcon width={ICON_HEART_SIZE} height={ICON_HEART_SIZE} />
        </button>
      </div>
      <h3 className={styles.title}>{movie.title}{movie.title}{movie.title}{movie.title}</h3>
      <div className={styles.overlay} />
      <span className={styles.btnPlay}>
        <PlayIcon className={styles.playIcon} width={ICON_PLAY_SIZE} height={ICON_PLAY_SIZE} />
      </span>
    </Link>
  );
};

export default MovieItem;
