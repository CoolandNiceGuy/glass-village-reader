import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/MobileHeader/MobileHeader";
import Head from "next/head";

const Sources = () => {
  return ( 
    <div>
      <Head>
        <title>Sources</title>
      </Head>
      <Header/>
      <MobileHeader/>
      <Footer/>
    </div>
   );
}
 
export default Sources;