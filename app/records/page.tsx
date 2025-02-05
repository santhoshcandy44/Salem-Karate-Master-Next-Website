
import Footer from "../footer";
import Header from "../header";
import TopBar from "../topbar";
import {HeaderInfoWrapper,HeaderInfoTwo} from '../home'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Records - World Super Talents Book Of Records",
  description: "Follow our YouTube channel to see all our records.",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/about/',
  },
};


const AboutUs = () => {
    return (
      <div style={{
        
        padding: '16px',
        
      }}>
        <h2>Records</h2>
        <p >

Follow our YouTube channel to see all our records.   </p>
       
      </div>
    );
  };
  

export default function(){

  







    return(
        <div className="root">
          <TopBar />
           <Header isHeader={true} isWST={true}/>
           <HeaderInfoWrapper/>
           <HeaderInfoTwo/>
            <AboutUs />
            <Footer/>
        </div>
    );
}