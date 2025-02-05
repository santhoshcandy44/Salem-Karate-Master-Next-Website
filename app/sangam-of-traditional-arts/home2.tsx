"use client"
import Header from "../header";
import Footer from "../footer";
import './sot.css'
import { Carousel } from 'react-bootstrap';
import TopBar from "./topbar";
import OurVision from "../ourvision";
import SOTOneImage from "../assets/sot_one.png"
import Cover1Image from "../assets/cover/cover_photo4.jpg"
import Cover2Image from "../assets/cover/cover_photo1.jpg"
import Cover3Image from "../assets/cover/cover_photo3.jpg"
import FITIndiaImage from "../assets/fit_india.jpg"
import COneImage from "../assets/c_one.jpg"
import SportsImage from "../assets/sports.png"
import HeaderInfoWrapperPage2 from "./headerinfowrapperpage2";
import HeaderInfoTwoPage2  from "./headerinfotwopage2";



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sangam Of Traditional Arts",
  description: "We have FIT INDIA,MSME,ISO certifications that apparently makes your right choice of yours. Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice.However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.",
  alternates: {
    canonical: 'https://www.worldsupertalents.com/',
  },
};





function SangamOfTraditionalArts() {
  return (
    <div className="container-fluid" style={{
      padding: '32px',
      backgroundColor: '#808080'
    }}>
      <div className="row">
        <div className="col-md-12 col-lg-6" style={{
          color: 'white',
          padding: '16px'
        }}>
          <div style={{
            position: 'relative',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <div>
              <h2 style={{
                fontWeight: 'bold'
              }}>
                WORLD SUPER TALENT
              </h2>
              <h2 style={{
                fontWeight: 'bold'
              }}>
                BOOK OF RECORDS
              </h2>
              <h2 style={{
                fontWeight: 'bold'
              }}>
                SANGAM OF TRADITIONAL ARTS
              </h2>
              <h3 className="py-4">
              We have FIT INDIA, MSME, ISO certifications that apparently makes your right choice of yours.

              </h3>
              <h4 className="py-4">
              Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice. However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.

              </h4>
            </div>
          </div>
       </div>
        <div className="col-md-12 col-lg-6">
          <div style={{
            padding: '36px'
          }}>
            <div style={{
              display: 'inline-block',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)'
            }}>
              <img src={SOTOneImage.src}
              className="animate__animated animate__shakeX animate__infinite"
              alt="World Super talents Book Of Records" width="100%" height="100%" style={{
                display: 'inline-block',
                maxWidth: '480px',
                maxHeight: '480px'
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function CertifiedAndApproved() {
  return (
    <div className="container-fluid" style={{
      padding: '32px',
      backgroundColor: '#808080'
    }}>
      <div className="row">
        <div className="col-md-12 col-lg-6" style={{
          color: 'white',
          padding: '16px'
        }}>
          <div style={{
            position: 'relative',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            <div>
              <h2 style={{
                fontWeight: 'bold'
              }}>
                Certified and Approved By...
              </h2>
              <h3 className="py-4">
                We have FIT INDIA, MSME, ISO certifications that apparently makes your right choice of yours.
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div style={{
                padding: '36px'
              }}>
                <div style={{
                  display: 'inline-block',
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}>
                  <img src={COneImage.src} alt="World Super talents Book Of Records" width="100%" height="100%" style={{
                    display: 'inline-block',
                    maxWidth: '480px',
                    maxHeight: '480px'
                  }} />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div style={{
                padding: '36px'
              }}>
                <div style={{
                  display: 'inline-block',
                  position: 'relative',
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}>
                  <img src={FITIndiaImage.src}alt="World Super talents Book Of Records" width="100%" height="100%" style={{
                    display: 'inline-block',
                    maxWidth: '480px',
                    maxHeight: '480px'
                  }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





function CarouselComponent() {

  return (

    <div className="carousel-container" style={{width:"100%",zIndex:10}}>
         
         
          <Carousel  
          indicators={false} 
    interval={1000}
    
    >
      
      <Carousel.Item>
      <div
        className='carousel-img'
        
         
        
        >
<img   src={Cover1Image.src} alt="First slide" style={{objectFit:'cover',width:'100%',height:'100%',opacity:'0.6'}}/>
            </div>

            

        <Carousel.Caption style={{left:'0'}}>
        <div className='container' style={{marginLeft:"0"}}>
        <p className='carousel-caption-sub-heading'
   >Shihan.Dr.SALEM KARATE NATARAJ , B.A., M.SC., B.P.E.D.</p>
        <h1 className='carousel-caption-heading animate__animated animate__slideInLeft'>Sangam Of Traditional Arts</h1>



          
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <div
        className='carousel-img'
        
         
        
        >
<img   src={Cover2Image.src} alt="Second slide"
 style={{objectFit:'cover',width:'100%',height:'100%',opacity:'0.6'}}/>
            </div>


        <Carousel.Caption>
        <div className='container'>
      

          </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div
        className='carousel-img'
        
         
        
        >
<img   src={Cover3Image.src} alt="Third slide" style={{objectFit:'cover',width:'100%',height:'100%',opacity:'0.6'}}/>
            </div>
            <Carousel.Caption style={{right:'0'}}>
            <div  className='container' style={{marginRight:"0"}} >
          
        
            </div>
            </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  );
}



const Quote = () => {

  return (
    <div className="container-fluid" style={{
      padding: '32px',
      backgroundColor: 'black',
    }}>
      <div className="row">
        <div className="col-md-12 col-lg-6">

        <div className="text-center my-4">

   

<iframe
 
  src="https://www.youtube.com/embed/2azcuclPnEA"

  style={{  width: '100%',
    height:'100%',
    maxHeight: '320',
    aspectRatio: '16/9'}}
/>


</div>


     

        </div>

        <div className="col-md-12 col-lg-6">
          <center>
            <h1 style={{ color: 'white' }}>
              "Keep away from those who try to belittle your ambitions. Small people always do that, but the really great make you believe that you too can become great."
            </h1>
          </center>
        </div>
      </div>
    </div>
  );
};



function OurResponsibilities() {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '32px' }}>
      <div>
        <center>
          <h1 style={{ padding: '8px' }}>Our Responsibilities</h1>
        </center>
        <center>
          <img
            src={SportsImage.src}
            width="100%"
            height="100%"
            style={{
              maxWidth: '480px',
              maxHeight: '600px',
            }}
          />
        </center>
      </div>

      <div className="container-fluid" style={{ padding: '32px' }}>
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <h1>"YOGA"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India. Yoga is one of the six Āstika schools of Hindu philosophical traditions. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"KABADDI"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Kabaddi is a contact team sport played between two teams of seven players each. ... Players are taken out of the game if they are tagged or tackled, but are brought back in for each point scored by their team from a tag or tackle. It is popular in the Indian Subcontinent and other surrounding Asian countries.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"SILAMBAM"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Silambam is a weapon-based Indian martial art originating in modern-day Tamil Nadu in the Indian subcontinent. This style is mentioned in Tamil Sangam literature circa 400 BCE.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"KARATE"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Karate is a martial art developed in the Ryukyu Kingdom. It developed from the indigenous Ryukyuan martial arts under the influence of Kung Fu, particularly Fujian White Crane.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"EXERCISE"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Exercise is any bodily activity that enhances or maintains physical fitness and overall health and wellness.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"MEDITATION"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"HEALTH CARING INSTRUCTIONS"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Bodybuilding developed in the late 19th century, promoted in England by German Eugen Sandow, now considered as the "Father of Modern Bodybuilding". He allowed audiences to enjoy viewing his physique in "muscle display performances". Although audiences were thrilled to see a well-developed physique, the men simply displayed their bodies as part of strength demonstrations or wrestling matches.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"BODY BUILDING"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Bodybuilding developed in the late 19th century, promoted in England by German Eugen Sandow, now considered as the "Father of Modern Bodybuilding". He allowed audiences to enjoy viewing his physique in "muscle display performances". Although audiences were thrilled to see a well-developed physique, the men simply displayed their bodies as part of strength demonstrations or wrestling matches.
            </span>
          </div>

          <div className="col-md-12 col-lg-4">
            <h1>"GUSTHI"</h1>
            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              Wrestling is a combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds. The sport can either be genuinely competitive or sportive entertainment.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home2() {
  


  
  
    return (
     <div className="root" >
        <TopBar/>
         
         <HeaderInfoWrapperPage2/>
         <HeaderInfoTwoPage2/>
  

         
         <Header isHome={true} isSOT={true}/>

         <CarouselComponent/>
         <SangamOfTraditionalArts/>
         <CertifiedAndApproved/>
         <Quote/>
         <OurResponsibilities/>   
         <OurVision/>

         
      <Footer/>
     </div>
    );
  }
  