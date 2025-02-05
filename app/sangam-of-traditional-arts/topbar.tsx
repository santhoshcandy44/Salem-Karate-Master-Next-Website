import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import './topbar.css';
const TopBar = () => {
  return (
    <div className="top-bar">
      <div>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{
            marginRight: '8px',
            color: 'white',
          }}
        />
        <a
          href="mailto:sangamoftraditionalarts@gmail.com"
          style={{
            textDecoration: 'none',
            color: 'white',
          }}
        >
         sangamoftraditionalarts@gmail.com
        </a>
      </div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100008211948588"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faFacebookF} size="1x" />
        </a>
        <a
          href="https://x.com/KarateNataraj"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com/salemkaratenataraj/"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://www.youtube.com/channel/UCSBx_KenYh37e7tldY-M-5g"
          target="_blank"
          rel="noopener noreferrer"
          className="top-bar-social-icon"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
