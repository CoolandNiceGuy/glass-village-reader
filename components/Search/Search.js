import styles from '@/styles/Search.module.css'
import { useEffect, useRef } from 'react'

const Search = ({filterFunction, onClickOutside}) => {
  const ref = useRef(null);

  const handleTextChange = (event) => {
    filterFunction(event.target.value);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
        filterFunction('');
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside, filterFunction ]);

  return ( 
    <div ref={ref}>
    {
      <textarea 
        placeholder='search' 
        onChange={handleTextChange} 
        className={styles.searchInput} 
        />
    }
    </div>
   );
}
 
export default Search;