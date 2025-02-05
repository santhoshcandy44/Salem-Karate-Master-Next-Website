import SOTOneImage from "../assets/sot_one.png"

import './sot.css'
export default function HeaderInfoWrapperPage2() {
    return (
      <div className="header-info-wrapper">
        <div className="header-info-table-wrapper" style={{ padding: '16px' }}>
          <div className="item-one">
            <img src={SOTOneImage.src} width={180} height={180} />
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
              Sangam Of Traditional Arts
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