import styles from '@/styles/Search.module.css'

const Search = ({filterFunction}) => {

  const handleTextChange = (event) => {
    filterFunction(event.target.value);
  }

  return ( 
    <div>
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