import NewestSection from 'components/page/Home/Newest';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <NewestSection />
    </main>
  );
}
