import React from 'react';


import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Footer = () => {
  return (
    <footer>
      <div
        data-wow-delay="0.1s"
        className="footer-wrapper wow animate__animated animate__bounceInDown"    style={{
          visibility: 'visible',
          animationDuration: '1.5s',
          animationDelay: '0.1s',
          animationName: 'bounceInDown',
        }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 py-4">
              <div className="two">
              <h3>About Us</h3>
              </div>
              
              <div>
                <h4>WORLD SUPER TALENT
BOOK OF RECORDS</h4>
<h4>SANGAM OF TRADITIONAL ARTS
</h4>

<p>
Developing balance, coordination, focus, respect, discipline, self-defense is well known features of every practice.However, we would like to turn your attention to some of the other important benefits that every kid is receiving in his or her karate class.
</p>

<h5>Our Vision
</h5>
<p>To Create Extraordinary Talented Persons.</p>
<h5>Our Motto</h5>
<p>" Your limitation—it's only your imagination. "
</p>
               
              </div>

            
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 py-4">
              <div className="two">
              <h3>Contact Us</h3>
              </div>
              
              <div>
              <h4>Address</h4>
<div>
  <span style={{ fontSize: '16px' }}>Shihan.Dr.</span>
  <span style={{ fontSize: '18px' }}>SALEM KARATE NATARAJ</span>
  <span style={{ fontSize: '16px' }}>, B.A., M.SC., B.P.E.D.,</span>

  <div style={{ fontSize: '16px' }}>
    6<span style={{ fontSize: '14px' }}>th</span> Dan, KAI 5th Dan Black Belt,
  </div>

  <div style={{ fontSize: '16px' }}>
    TKT 1<span style={{ fontSize: '14px' }}>st</span> Dan Black Belt,
  </div>

  <div style={{ fontSize: '16px' }}>
    96<span style={{ fontSize: '14px' }}>th</span> Individual Record Holder
  </div>

  <div style={{ fontSize: '16px' }}>
    <div>Guinness Multi Record Holder</div>
  </div>

  <div style={{ padding: '16px 0px' }}>
    <div>S/O Karuppannan,</div>
    <div>1/74 Athanoor,</div>
    <div>Thappakkuttai (PO),</div>
    <div>Elampillai,</div>
    <div>Sangakiri TK,</div>
    <div>Salem DT,</div>
    <div>637502.</div>
  </div>
</div>

<div style={{ marginBottom: '16px' }}>
  <h4>Phone Number</h4>
  <div>
    <a href="tel:+919626780303" className='link-suppress'>+91 96267 80303</a>
  </div>
  <div>
    <a href="tel:+919994876789" className='link-suppress'>+91 99948 76789</a>
  </div>
</div>

<div style={{ marginBottom: '16px' }}>
  <h4>Email</h4>
  <div>
    <a href="mailto:karatenataraj@gmail.com" className='link-suppress'>karatenataraj@gmail.com</a>
  </div>
  <div>
    <a href="mailto:worldsupertalent@gmail.com" className='link-suppress'>worldsupertalent@gmail.com</a>
  </div>
  <div>
    <a href="mailto:sangamoftraditionalarts@gmail.com" className='link-suppress'>sangamoftraditionalarts@gmail.com</a>
  </div>
  <div>
    <a href="mailto:Salemkaratenatarj@gmail.com" className='link-suppress'>Salemkaratenatarj@gmail.com</a>
  </div>
</div>

<div style={{ marginBottom: '16px' }}>
  <h4>Whatsapp Contact</h4>
  <div>
    <div>
      <a href="https://wa.me/+919626780303" className='link-suppress'>+91 96267 80303</a>
    </div>
    <div>
      <a href="https://wa.me/+919994876789" className='link-suppress'>+91 99948 76789</a>
    </div>
  </div>
</div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-2 py-4">
              <div className="two">
              <h3>Follow Us</h3>
              </div>
              
             
              <div>

<p>To get our every movement of snaps and notifications just follow us in our social media pages.</p>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100008211948588"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#3b5998' }}
                >
 
                         <FontAwesomeIcon icon={faFacebookF}  />

                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://x.com/KarateNataraj"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#1da1f2' }}
                >

<FontAwesomeIcon icon={faXTwitter}  />


                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com/salemkaratenataraj/"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#0077B5' }}
                >
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>

                <a
                  href="https://www.youtube.com/channel/UCSBx_KenYh37e7tldY-M-5g"
                  target="_blank"
                  className="social-icon"
                  style={{ backgroundColor: '#0077B5' }}
                >
                    <FontAwesomeIcon icon={faYoutube}/>
                </a>
              </div>

              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3 py-4">
              <div className="two">
                <h3>Certified By</h3>
              </div>

              <div>
                <ul>
                <li>GOVT REGISTER</li>
                <li>FIT INDIA</li>
                <li>MSME</li>
                <li>ISO</li>
                </ul>
                <p>
                We have FIT INDIA,MSME,ISO certifications that apparently makes your right choice of yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid gray', backgroundColor: 'black', color: 'white' }}>
        <div className="text-center p-3">
          © Copyright{' '}
          <a href="/" className="link-suppress">
             World Super Telents Book of Record
          </a>{' '}
          {new Date().getFullYear()} | All rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
