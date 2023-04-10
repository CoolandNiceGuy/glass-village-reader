import styles from '@/styles/Home.module.css'
import Feed from '@/components/Feed/feed'
import { getRSSFeeds } from '@/utils/getRSSFeeds'
import Parser from 'rss-parser';
import Header from '@/components/Header/Header';
import MobileHeader from '@/components/MobileHeader/MobileHeader';
import { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import Head from 'next/head'


export const getStaticProps = async () => {
  let parser = new Parser();
  const feeds = await getRSSFeeds();
  const output = [];
  console.log('getStaticProps called!');
  
  for(let i = 0; i < feeds.length; i++){
    let content = await parser.parseURL(feeds[i].fields.url);

    // only send fields that we USE
    const formattedContent = content.items.map(v => ({
      guid: v.guid || v.id, 
      link: v.link,
      creatorTag: feeds[i].fields['Name'],
      contentSnippet:v.contentSnippet,
      isoDate: v.isoDate,
      title: v.title,
    }))

    output.push(...formattedContent)
  }

  //sort items by date
  output.sort(function(a, b) {
    return (a.isoDate > b.isoDate) ? -1 : ((a.isoDate < b.isoDate) ? 1 : 0);
});

  return {
    props: {
      items: output // shorten length of output if data is too large
    },
    revalidate: 60,
  }
}

export default function Home({items}) {
  const [feedFilter, setFeedFilter] = useState('');

  return (
    <>
    <div className={styles.homeWrapper}>
      <Head>
        <title>Glass Village Feed</title>
      </Head>
      <Header setFilterFunction={setFeedFilter}/>
      <MobileHeader/>
      <Feed feedItems={items.filter(item => item.title.toLowerCase().includes(feedFilter.toLowerCase()))} filter={feedFilter}/>
      <Footer/>
    </div>
    </>
  )
}
