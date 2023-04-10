import styles from '@/styles/Footer.module.css'
import Link from 'next/link';

const Footer = () => {
  return ( 
    <div className={styles.footer}>
      <div className={styles.navContainer}>
        <Link href="/about">
          <h1 className={styles.mobileLink}>ABOUT</h1>
        </Link>
        <Link href="/sources">
          <h1 className={styles.mobileLink}>SOURCES</h1>
        </Link>
        <Link href="contact">
          <h1 className={styles.mobileLink}>CONTACT</h1>
        </Link>
      </div>
    </div>
   );
}
 
export default Footer;