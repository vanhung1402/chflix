import React from 'react';

import { HeartIcon } from 'assets/icons';

import styles from './index.module.scss';

const ICON_HEART_SIZE = 24;

const Bookmark = () => {
  return (
    <div className={styles.bookmark}>
      <HeartIcon width={ICON_HEART_SIZE} height={ICON_HEART_SIZE} color={styles.textPrimaryColor} />
      <span className={styles.bookmarkTitle}>Phim yêu thích</span>
      <span className={styles.bookmarkCount}>{1}</span>
    </div>
  );
};

export default Bookmark;
