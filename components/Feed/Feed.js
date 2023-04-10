import styles from '../../styles/Feed.module.css'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faCopy } from '@fortawesome/free-solid-svg-icons';
import toast, { Toaster } from 'react-hot-toast';
import { CSSTransition } from 'react-transition-group';

const TIMEOUT_VAL = 700;

const Feed = ({feedItems, filter}) => {
  // console.log(feedItems);
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
  
  useEffect(() => {
    //filter includedDetails to only contain indices that abide by filter
    const selected = includeDetails.filter(index => feedItems[index].title.toLowerCase().includes(filter.toLowerCase()))
    setIncludeDetails(selected);
  }, [filter]);

  return ( 
    <div className={styles.feed}>
          {
            feedItems.map((item, index) =>(
              (
                <div  key={item.guid || item.id}>
                  <div className={styles.feedItem}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.titleLink}><span className={styles.title}>{item.title}</span></a>
                      <div className={styles.extrasContainer}>
                        <span className={styles.creatorTag}>{item.creatorTag}</span>
                        <button className={styles.itemButtom} 
                          onClick={() => {
                            navigator.clipboard.writeText(item.link)
                            toast('Link Copied', {
                              duration: 4000,
                              position: 'bottom-right',
                              icon: '🌐',
                              style: {
                                background: '#0d0208',
                                color: '#DF00FE',
                                border: '1px solid #DF00FE',
                                fontSize: '18px',
                              }
                            })
                          }}
                        >
                          <Toaster/>
                          <FontAwesomeIcon icon={faCopy}/>
                        </button>
                        <button className={styles.itemButtom} 
                          value={index} 
                          onClick={(e => toggleDetails(e.currentTarget.value))}
                          aria-label={(includeDetails.includes(index.toString()))? 'Hide details':'Show details'}
                        >
                          {(includeDetails.includes(index.toString()))?  <FontAwesomeIcon icon={faMinus}/>: <FontAwesomeIcon icon={faPlus}/>}
                        </button>
                      </div>
                  </div>
                    {
                      <CSSTransition
                      in={includeDetails.includes(index.toString())}
                      timeout={TIMEOUT_VAL}
                      classNames={{
                        appear: styles.MyClassAppear,
                        appearActive: styles.MyClassAppearActive,
                        appearDone: styles.MyClassAppearDone,
                        enter: styles.MyClassEnter,
                        enterActive: styles.MyClassEnterActive,
                        enterDone: styles.MyClassEnterDone,
                        exitActive: styles.MyClassExitActive,
                        exitDone: styles.MyClassExitDone,
                        exit: styles.MyClassExit,
                      }}
                      appear
                      unmountOnExit
                      >
                        <p className={styles.contentSnippet}>{item.contentSnippet}</p>
                      </CSSTransition>
                    }
                </div>
              )
            ))
          }
    </div>
   );
}
 
export default Feed;