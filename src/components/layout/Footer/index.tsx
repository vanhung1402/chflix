import React from 'react';
import classNames from 'classnames';

import styles from './index.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.footerContainer, 'container')}>
        <p className={styles.copyright}>© chflix.com, 2023. Created by Van Hung</p>
        <div className={styles.links}>Web phim Trung Quốc</div>
      </div>
    </footer>
  );
};
