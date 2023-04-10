import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Head from 'next/head'

const About = () => {
  return ( 
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Header/>
      <MobileHeader/>
      <Footer/>
    </div>
   );
}
 
export default About;