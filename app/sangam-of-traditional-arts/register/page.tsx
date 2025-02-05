
import Footer from "./../../footer";
import Header from "./../../header";
import TopBar from "./../../topbar";
import './register.css'
import HeaderInfoWrapperPage2 from "../headerinfowrapperpage2";
import HeaderInfoTwoPage2  from "../headerinfotwopage2";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Sangam Of Traditional Arts",
  description: "Just download the form to register in our organization. SHOW YOUR RECORDS TO THE WORLD",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/sangam-of-traditional-arts/register/',
  },
};

function DownloadForms() {
    return (
      <div style={{
        padding: '32px',
        backgroundColor: 'orange',
        color: 'white'
      }}>
        <center>
          <p className="fs-4">Just download the form to register in our organization.</p>
        </center>
        <center>
          <h2>SHOW YOUR RECORDS TO THE WORLD</h2>
        </center>
        <center>
          <a
            style={{
              padding: '16px',
              borderWidth: '1px',
              borderColor: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              borderStyle: 'solid',
              margin: '8px',
              display: 'inline-block',
              color: 'white'
            }}
            href="/forms/form.pdf"
            download
          >
            Download Here
          </a>
        </center>
      </div>
    );
  }


function Register() {
    return (
    <DownloadForms/>
    );
  }



  export default function(){

    return(
        <div className="root">
          <TopBar/>
           <Header isHeader={true} isSOT={true}/>
           <HeaderInfoWrapperPage2/>
         <HeaderInfoTwoPage2/>
            <Register />
            <Footer/>
        </div>
    );
}