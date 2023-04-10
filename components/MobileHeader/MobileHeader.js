
import styles from '@/styles/MobileHeader.module.css'
import Link from 'next/link';
import { useState } from 'react';
import { faBars, faXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  return ( 
    <div className={styles.mobileHeader}>
      {/* <div className={styles.buttonWrapper}>
        <button onClick={() => {setShowMenu(true)}} className={styles.mobileButton}>
          <FontAwesomeIcon icon={faBars}/>
        </button>
      </div> */}
      <Link href="/">
        <h1 className={styles.title}>Glass Village</h1>
      </Link>
      {  
        showMenu &&
        <div className={styles.mobileNavMenu}>
          <button onClick={() => {setShowMenu(false)}}>
            <FontAwesomeIcon icon={faXmark}/>
          </button>
            <Link href="/about">
              <h1 className={styles.mobileLink}>About</h1>
            </Link>
            <Link href="/sources">
              <h1 className={styles.mobileLink}>Sources</h1>
            </Link>
            <Link href="contact">
              <h1 className={styles.mobileLink}>Contact</h1>
            </Link>
        </div>
      }
    </div>
   );
}
 
export default MobileHeader;