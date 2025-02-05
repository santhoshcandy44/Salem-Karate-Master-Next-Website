'use client'
import TopBar from "./topbar";
import Header from "./header";
import Footer from "./footer";
import './home.css'
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import OurVision from "./ourvision";
import WSTLogoImage from "./assets/wst_logo.png"
import MasterHeaderImage from "./assets/master_header.png"
import Cover1Image from "./assets/cover/sliderbg-03.jpg"
import Cover2Image from "./assets/cover/sliderbg-02.jpg"
import Cover3Image from "./assets/cover/cover_photo5.jpg"
import FITIndiaImage from "./assets/fit_india.jpg"
import COneImage from "./assets/c_one.jpg"
import KnowledgeTreeImage from "./assets/knowledge_tree.png"
import CoverImage from "./assets/cover.jpg"
import M0Image from './assets/members/0.jpg';
import M1Image from './assets/members/1.jpg';
import M2Image from './assets/members/2.jpg';
import M3Image from './assets/members/3.jpg';
import M4Image from './assets/members/4.jpg';
import M5Image from './assets/members/5.jpg';
import M6Image from './assets/members/6.jpg';
import M7Image from './assets/members/7.jpg';
import M8Image from './assets/members/8.jpg';
import M9Image from './assets/members/9.jpg';
import M10Image from './assets/members/10.jpg';
import M11Image from './assets/members/11.jpg';
import M12Image from './assets/members/12.jpg';
import M13Image from './assets/members/13.jpg';
import M14Image from './assets/members/14.jpg';





export function HeaderInfoWrapper() {
  return (
    <div className="header-info-wrapper" >
      <div className="header-info-table-wrapper" style={{padding:'16px'}}>
        <div className="item-one">
          <img src={WSTLogoImage.src} width={180} height={180} />
        </div>

        <div className="item-two">
          <span style={{
            fontSize: '40px',
            display: 'block',
            fontWeight: 'bold',
            textAlign: 'center'
          }}>
            Welcome To
          </span>
          <span style={{
            fontSize: '60px',
            display: 'block',
            textAlign: 'center'
          }}>
            WORLD SUPER TALENT
          </span>
          <span style={{
            fontSize: '60px',
            display: 'block',
            textAlign: 'center'
          }}>
            BOOK OF RECORDS
          </span>
          <span style={{
            fontSize: '30px',
            fontWeight: 'bold',
            display: 'block',
            textAlign: 'center'
          }}>
We Are Responsible To Bring Out Your Talent To The World

          </span>
        </div>
      </div>
    </div>
  );
}

export function HeaderInfoTwo() {
  return (
    <div className="header-info-table-wrapper"  style={{padding:'16px'}}>
      <div className="item-one">
        <img src={MasterHeaderImage.src} width={180} height={180} />
      </div>
      <div className="item-two">
        <div>
          <span style={{
            fontSize: '30px',
            display: 'block',
            textAlign: 'center'
          }}>
            Founder & Organizer
          </span>
          <span style={{
            fontSize: '30px',
            display: 'block',
            textAlign: 'center'
          }}>
            <span style={{
              fontSize: '24px'
            }}>
              Shihan.Dr.
            </span>
            Salem Karate Nataraj
            <span style={{
              fontSize: '24px'
            }}>
              , B.A., M.SC., B.P.E.D.
            </span>
          </span>
          <span style={{
            fontSize: '24px',
            display: 'block',
            textAlign: 'center'
          }}>
            6<span style={{
              fontSize: '16px'
            }}>
              th
            </span>
            Dan, KAI 5<span style={{
              fontSize: '16px'
            }}>
              th
            </span>
            Dan Black Belt
          </span>
          <span style={{
            fontSize: '24px',
            display: 'block',
            textAlign: 'center'
          }}>
            TKT 1<span style={{
              fontSize: '16px'
            }}>
              st
            </span>
            Dan Black Belt
          </span>
          <span style={{
            fontSize: '24px',
            display: 'block',
            textAlign: 'center'
          }}>
            99 Individual Record Holder
          </span>
          <span style={{
            fontSize: '24px',
            display: 'block',
            textAlign: 'center'
          }}>
            Guinness Multi Record Holder
          </span>
        </div>
      </div>
    </div>
  );
}


function WorldSuperTalent() {
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
              <img src={WSTLogoImage.src}
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

function CommitteeMembers() {
  return (
    <div className="py-4" style={{textAlign:'center'}}>
                    <h2>Our Committe Members</h2>

     
      <div className="container-fluid">
        
        <div>
          <center>
            <h3 className="py-4" >Overall Event Incharger</h3>
          </center>
          <div className="row">
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M0Image.src} width={100} height={100} style={{
                display: 'inline-block',
         
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  Nataraj
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  ORGANIZER
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M1Image.src} width={100} height={100} style={{
                display: 'inline-block',
              
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  G.R.BOOVARAHAVAN M.E
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  TEAM MANAGER
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M2Image.src} width={100} height={100} style={{
                display: 'inline-block',
          
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  G.R.NITHEESRAJ B.E
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT INSTRUCTOR
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M3Image.src} width={100} height={100} style={{
                display: 'inline-block',
             
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  SUBHASH CHANDRA BOSE
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT INCHARGE AND CAMERA MAN
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M4Image.src} width={100} height={100} style={{
                display: 'inline-block',
             
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  N.PONNARASAN
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT EDITOR
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M5Image.src} width={100} height={100} style={{
                display: 'inline-block',
           
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  SANTHOSH KUMAR
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  DESIGNER
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M6Image.src} width={100} height={100} style={{
                display: 'inline-block',
               
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  SILAMBAM S.ANBALAGAN
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT ORGANIZER (PUDHUCHERRY)
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M7Image.src} width={100} height={100} style={{
                display: 'inline-block',
              
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  KARATE A.K.NISHOK RAJHA
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT ORGANIZER (KARUR)
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M8Image.src} width={100} height={100} style={{
                display: 'inline-block',
            
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  KARATE N.ABDHUL WAHAB
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT ORGANIZER
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M9Image.src} width={100} height={100} style={{
                display: 'inline-block',
     
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  KARATE VENKAT
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT ORGANIZER (THIRUVALLUVAN)
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M10Image.src} width={100} height={100} style={{
                display: 'inline-block',
            
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  THOOTHUKKUDI SANKAR
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT ORGANIZER
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M11Image.src} width={100} height={100} style={{
                display: 'inline-block',
     
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  KARATE DHANAPAL
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT INCHARGE
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M12Image.src} width={100} height={100} style={{
                display: 'inline-block',
             
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  N.KANAGA SAPAAPATHI
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT INCHARGE
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M13Image.src} width={100} height={100} style={{
                display: 'inline-block',
         
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  KARATE SUDHAKAR
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT INCHARGE
                </span>
              </center>
            </div>
            <div className="col-md-3" style={{ padding: '8px' }}>
              <img src={M14Image.src} width={100} height={100} style={{
                display: 'inline-block',
          
                borderRadius: '50%',
                borderColor: 'black',
                borderWidth: '2px',
                borderStyle: 'solid'
              }} />
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  M.DINSESHKUMAR
                </span>
              </center>
              <center>
                <span style={{
                  fontWeight: 'bold',
                  margin: '4px',
                  display: 'inline-block'
                }}>
                  EVENT ORGANIZER
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





function QuoteSection() {
  return (
    <div style={{
      padding: '64px 32px',
      backgroundColor: 'black'
    }}>
      <center>
        <span style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          " Push yourself, because no one else is going to do it for you. "
        </span>
      </center>
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
        <h1 className='carousel-caption-heading animate__animated animate__slideInLeft'>WORLD SUPER TALENT
BOOK OF RECORDS</h1>



          
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
 
  src="https://www.youtube.com/embed/CZLvcDGQMeo"

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

const MartialArtsBenefits = () => {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '32px' }}>
      <div>
        <center>
          <img
            src={KnowledgeTreeImage.src}
            width="100%"
            height="100%"
            style={{ maxWidth: '480px', maxHeight: '600px' }}
          />
        </center>
      </div>

      <div className="container-fluid" style={{ padding: '32px' }}>
        <div className="row">
          <div className="col-md-12 col-lg-4" style={{ padding: '16px' }}>

          <FontAwesomeIcon
      icon={faLightbulb}
      size="5x"
      className="m-4"
      style={{
        display: 'inline-block',
      
        boxShadow: '0px 0px 2px #888',
        padding: '0.5em 0.6em',
        float: 'left',
      
      }}
      aria-hidden="true"
    />

            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              <span style={{ fontWeight: 'bold' }}>Gain Strength & Power </span>
              Gain Strength & Newer Many martial arts give a particular focus to the ability for the physical body to be both strong and powerful. This is especially true when training in Taekwondo that involves a tremendous amount of strength to execute complex kicks and moves will help improve the musculature of your whole body.
            </span>
          </div>

          <div className="col-md-12 col-lg-4" style={{ padding: '16px' }}>
          <FontAwesomeIcon
      icon={faRocket}
      size="5x"
      className="m-4"
      style={{
        display: 'inline-block',
       
        boxShadow: '0px 0px 2px #888',
        padding: '0.5em 0.6em',
        float: 'left',
      
      }}
      aria-hidden="true"
    />


            <span style={{ overflow: 'hidden', padding: '0px 8px' }}>
              <span style={{ fontWeight: 'bold' }}>Improved Flexibility </span>
              High kick, aggressive throws, and acrobatic evasions are an important part of more than a few martial art disciplines., executing such moves will require a great amount of flexibility, so if you are not already flexible, participating in martial arts like Judo, MMA, or Muay Thai will help to facilitate improvement in that area.
            </span>
          </div>

          <div className="col-md-12 col-lg-4" style={{ padding: '16px' }}>
          <FontAwesomeIcon
      icon={faRefresh}
      size="5x"
      className="m-4"
      style={{
        display: 'inline-block',
        
        boxShadow: '0px 0px 2px #888',
        padding: '0.5em 0.6em',
        float: 'left',
     
      }}
      aria-hidden="true"
    />

            <span >
              <span style={{ fontWeight: 'bold' }}>Stress Relief </span>
              If you are looking to become more centered and flow through life with an increased appreciation for the world around you, practicing martial arts can definitely help you.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};




function Community() {
  return (
    <div>
    
      <div style={{ position: 'relative' }}>
        <div
          style={{
            backgroundImage: `url('${CoverImage.src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '480px',
            width: '100%',
          }}
        >
          {/* Empty div for background image */}
        </div>
        <div className="box-co">
          <center>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
              Our Community
            </span>
          </center>
          <center>
            <h3>Let's make talented Persons.</h3>
          </center>
          <center>
            <p>
              "I fear not the man who has practiced 10,000 kicks once, but I fear the
              man who has practiced one kick 10,000 times"
            </p>
          </center>
          <center>
            "Life’s battles don’t always go to the stronger or faster man. But sooner
            or later the man who wins, is the man who thinks he can."
          </center>
          <div style={{ margin: '16px' }}>
            <center>
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>
                - Bruce Lee
              </span>
            </center>
          </div>
          <div style={{ textAlign: 'right', margin: '16px' }}>
            <span
              style={{
                padding: '8px',
                border: '1px solid black',
                borderRadius: '2px',
              }}
            >
              Yours Great Choice
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  


  
  
    return (
     <div className="root" >
        <TopBar/>
         
         <HeaderInfoWrapper/>
         <HeaderInfoTwo/>
  

         
         <Header isHome={true} isWST={true}/>

         <CarouselComponent/>
         <WorldSuperTalent/>
         <CertifiedAndApproved/>
         <Quote/>
         <MartialArtsBenefits/>
         <CommitteeMembers/>
      
         <QuoteSection/>
         <Community/>
         <OurVision/>

         
      <Footer/>
     </div>
    );
  }
  