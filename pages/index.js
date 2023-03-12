import styles from '@/styles/Home.module.css'
import Feed from '@/components/Feed/feed'
import { getRSSFeeds } from '@/utils/getRSSFeeds'
import Parser from 'rss-parser';
import Header from '@/components/Header/Header';
import { useState } from 'react';

export const getStaticProps = async () => {
  let parser = new Parser();
  const feeds = await getRSSFeeds();
  const output = [];
  
  for(let i = 0; i < feeds.length; i++){
    let content = await parser.parseURL(feeds[i].fields.url);
    const formattedContent = content.items.map(v => ({...v, creatorTag: feeds[i].fields['Name']}));
    output.push(...formattedContent)
  }

  //sort items by date
  output.sort(function(a, b) {
    return (a.isoDate > b.isoDate) ? -1 : ((a.isoDate < b.isoDate) ? 1 : 0);
});



  return {
    props: {
      items: output
    }
  }
}

export default function Home({items}) {
  const [feedFilter, setFeedFilter] = useState('');

  return (
    <>
    <div className={styles.homeWrapper}>
      <Header setFilterFunction={setFeedFilter}/>
      <Feed feedItems={items.filter(item => item.title.toLowerCase().includes(feedFilter.toLowerCase()))} filter={feedFilter}/>
    </div>
    </>
  )
}
