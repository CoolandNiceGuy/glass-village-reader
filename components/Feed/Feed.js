import styles from '../../styles/Feed.module.css'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCopy } from '@fortawesome/free-solid-svg-icons';

const Feed = ({feedItems, feedFilter}) => {
  console.log(feedItems);
  const [includeDetails, setIncludeDetails] = useState([])
  
  const toggleDetails = (buttonIndex) => {
    const x = includeDetails.indexOf(buttonIndex);
    if(x === -1){
      // show details
      setIncludeDetails([...includeDetails, buttonIndex])
    }
    else{
      // hide details
      let arr = includeDetails.filter((element) => element !== buttonIndex)
      setIncludeDetails([...arr])
    }
  }

  // lets count how many tags have content
  let contentCounter = 0;

  return ( 
    <div className={styles.feed}>
          {
            feedItems.map((item, index) =>(
              (
                <>
                  <div className={styles.feedItem} key={item.guid || item.id}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer"><span>{item.title}</span></a>
                      <div className={styles.extrasContainer}>
                        <span className={styles.creatorTag}>{item.creatorTag}</span>
                        <button className={styles.itemButtom} onClick={() => {navigator.clipboard.writeText(item.link)}}>
                          <FontAwesomeIcon icon={faCopy}/>
                        </button>
                        <button className={styles.itemButtom} value={index} onClick={(e => toggleDetails(e.currentTarget.value))}>
                          {(includeDetails.includes(index.toString()))?  <FontAwesomeIcon icon={faMinus}/>: <FontAwesomeIcon icon={faPlus}/>}
                        </button>
                      </div>
                  </div>
                    {
                      includeDetails.includes(index.toString()) &&
                      <p className={styles.contentSnippet}>{item.contentSnippet}</p>
                    }
                </>
              )
            ))
          }
    </div>
   );
}
 
export default Feed;