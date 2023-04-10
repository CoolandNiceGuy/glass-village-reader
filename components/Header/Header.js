import styles from '../../styles/Header.module.css'
import Link from 'next/link';
import NavButton from '@/components/NavButton/NavButton';
import Search from '@/components/Search/Search';

const Header = ({setFilterFunction}) => {
  return ( 
    <div className={styles.header}>
      <Link href="/">
        <h1 className={styles.title}>Glass Village</h1>
      </Link>
      <div className={styles.navOptions}>
        <div className={styles.navLinks}>
          <Link href="/about">
            <NavButton title='About'></NavButton>
          </Link>
          <Link href="/sources">
            <NavButton title='Sources'></NavButton>
          </Link>
          <Link href="contact">
            <NavButton title='Contact'></NavButton>
          </Link>
        </div>
        <Search filterFunction={setFilterFunction} onClickOutside={() => {}}/>
      </div>
    </div>
   );
}
 
export default Header;