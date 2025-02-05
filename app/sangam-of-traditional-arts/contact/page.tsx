
import Footer from "./../../footer";
import Header from "./../../header";
import TopBar from "./../../topbar";
import './contact.css'
import HeaderInfoWrapperPage2 from "../headerinfowrapperpage2";
import HeaderInfoTwoPage2  from "../headerinfotwopage2";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact - Sangam Of Traditional Arts",
  description: "Contact us via Phone Number +91 96267 80303, +91 99948 76789.",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/sangam-of-traditional-arts/contact/',
  },
};

function ContactUs() {
    return (
      <div style={{
     
        padding: '16px',
        
      }}>
        <h2>Contact Us</h2>
  
        <div style={{ marginBottom: '16px' }}>
          <h3>Address</h3>
          <div>
            <span style={{ fontSize: '16px' }}>Shihan.Dr.</span>
            <span style={{ fontSize: '18px' }}>SALEM KARATE NATARAJ</span>
            <span style={{ fontSize: '16px' }}>, B.A., M.SC., B.P.E.D., </span>
  
            <div style={{ fontSize: '18px' }}>
              6<span style={{ fontSize: '14px' }}>th </span> Dan, KAI 5th Dan Black Belt,
            </div>
  
            <div style={{ fontSize: '18px' }}>
              TKT 1<span style={{ fontSize: '14px' }}>st</span> Dan Black Belt,
            </div>
  
            <div style={{ fontSize: '18px' }}>
              96<span style={{ fontSize: '14px' }}>th </span> Individual Record Holder
            </div>
  
            <div style={{ fontSize: '18px' }}>
              <div>Guinness Multi Record Holder</div>
            </div>
  
            <div style={{ padding: '16px 0px', fontSize: '18px' }}>
              <div>S/O Karuppannan,</div>
              <div> 1/74 Athanoor, </div>
              <div>Thappakkuttai (PO), </div>
              <div>Elampillai,</div>
              <div>Sangakiri TK,</div>
              <div>Salem DT,</div>
              <div>637502.</div>
            </div>
          </div>
        </div>
  
        <div style={{ marginBottom: '16px', fontSize: '16px' }}>
          <h3>Phone Number</h3>
          <div>
            +91 96267 80303
          </div>
          <div>
            +91 99948 76789
          </div>
        </div>
  
        <div style={{ marginBottom: '16px', fontSize: '16px' }}>
          <h2>Email</h2>
          <div>
            karatenataraj@gmail.com
          </div>
          <div>
            worldsupertalent@gmail.com
          </div>
          <div>
            sangamoftraditionalarts@gmail.com
          </div>
          <div>
            Salemkaratenatarj@gmail.com
          </div>
        </div>
  
        <div style={{ marginBottom: '16px' }}>
          <h2>Whatsapp Contact</h2>
          <div style={{ fontSize: '18px' }}>
            <div>
              +91 96267 80303
            </div>
            <div>
              +91 99948 76789
            </div>
          </div>
        </div>
      </div>
    );
  }



  export default function(){

    return(
        <div className="root">
          <TopBar/>
           <Header isHeader={true}  isSOT={true}/>
           <HeaderInfoWrapperPage2/>
         <HeaderInfoTwoPage2/>
            <ContactUs />
            <Footer/>
        </div>
    );
}