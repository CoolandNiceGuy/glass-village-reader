import styles from '@/styles/NavButton.module.css'

const NavButton = ({ title}) => {

  return ( 
    <div className={styles.navButton}>
      <span className={styles.title}>{title}</span>
    </div>
   );
}
 
export default NavButton;