'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import Bookmark from './Bookmark';
import { MenuLeftIcon, PlusIcon, SearchIcon, TimesIcon } from 'assets/icons';

import styles from './index.module.scss';

const links = [
  { slug: 'tu-tien', title: 'Tu tiên' },
  { slug: 'luyen-cap', title: 'Luyện cấp' },
  { slug: 'trung-sinh', title: 'Trùng sinh' },
  { slug: 'kiem-hiep', title: 'Kiếm hiệp' },
  { slug: 'xuyen-khong', title: 'Xuyên không' },
];

const ICON_SEARCH_SIZE = 24;
const ICON_MENU_LEFT_SIZE = 32;

interface NavLinkProps {
  className?: string;
}

const NavLinks = ({ className }: NavLinkProps) => (
  <ul className={classNames(styles.navLinks, className)}>
    {links.map((link) => <li key={link.slug} className={styles.navItem}><Link href={link.slug}>{link.title}</Link></li>)}
  </ul>
);

interface SearchFormProps {
  className?: string;
}

const SearchForm = ({ className }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchValue = inputRef.current?.value;
    console.log('searchValue: ', searchValue);
  };

  return (
    <form className={classNames(styles.searchWrapper, className)} onSubmit={handleSubmit}>
      <input ref={inputRef} className={styles.searchInput} type="text" placeholder="Nhập tên phim cần tìm..." />
      <button className={styles.searchButton}>
        <SearchIcon width={ICON_SEARCH_SIZE} height={ICON_SEARCH_SIZE} />
      </button>
    </form>
  );
};

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isShowSearchForm, setShowSearchForm] = useState(false);

  const handleToggleMenu = () => setOpenMenu(!isOpenMenu);

  const handleOpenSearchForm = () => setShowSearchForm(true);

  const handleCloseSearchForm = () => setShowSearchForm(false);

  return (
    <header className={styles.header}>
      <nav className={classNames(styles.headerContainerTablet, 'container', {[styles.visible]: isOpenMenu})}>
        <NavLinks className={styles.navLinksTablet} />
      </nav>
      <nav className={classNames(styles.headerContainer, 'container')}>
        <div className={styles.brandNameContainer}>
          <button className={classNames(styles.btnToggleMenu, {[styles.visible]: isOpenMenu})} onClick={handleToggleMenu}>
            <PlusIcon className={styles.iconPlus} />
            <MenuLeftIcon className={styles.iconMenuLeft} width={ICON_MENU_LEFT_SIZE} height={ICON_MENU_LEFT_SIZE} />
          </button>
          <Link href="/">
            <span className={styles.brandName}>chflix</span>
            <small className={styles.domainName}>.com</small>
          </Link>
        </div>
        <NavLinks className={styles.tabletHidden} />
        <div className={styles.actionsContainer}>
          <button className={classNames(styles.searchButton, styles.mobileVisible)} onClick={handleOpenSearchForm}>
            <SearchIcon width={ICON_SEARCH_SIZE} height={ICON_SEARCH_SIZE} />
          </button>
          <SearchForm className={styles.mobileHidden} />
          <Bookmark />
        </div>
        <div className={classNames(styles.searchFormWrapper, {[styles.visible]: isShowSearchForm})}>
          <SearchForm />
          <button className={styles.btnClose} onClick={handleCloseSearchForm}>
            <TimesIcon width={ICON_SEARCH_SIZE} height={ICON_SEARCH_SIZE} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
