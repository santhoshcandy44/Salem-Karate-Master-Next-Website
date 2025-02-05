import Footer from "./../../footer";
import Header from "./../../header";
import TopBar from "./../../topbar";
import HeaderInfoWrapperPage2 from "../headerinfowrapperpage2";
import HeaderInfoTwoPage2  from "../headerinfotwopage2";


import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "About - Sangam Of Traditional Arts",
  description: "Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice. However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/sangam-of-traditional-arts/about/',
  },
};



const AboutUs = () => {
    return (
      <div style={{
        
        padding: '16px',
        
      }}>
        <h2>About Us :</h2>
        <h3>World Super Talent Book Of Records and Sangam Of Traditional Arts</h3>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice. However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.
        </p>
        <h3>Certified By</h3>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          We have FIT INDIA,MSME,ISO certifications that apparently makes your right choice of yours.
        </p>
        <h3>Our Vision</h3>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          To create extraordinary talented persons.
        </p>
        <h3>Our Motto</h3>
        <p style={{
          fontSize: '16px',
          fontWeight: 'bold',
        }}>
          "Your limitation—it's only your imagination."
        </p>
      </div>
    );
  };
  

export default function(){

  







    return(
        <div className="root">
          <TopBar />
           <Header isHeader={true}  isSOT={true} />
           <HeaderInfoWrapperPage2/>
         <HeaderInfoTwoPage2/>
            <AboutUs />
            <Footer/>
        </div>
    );
}