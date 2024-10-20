import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'

import './sidebar.scss';
import Logo from '/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faBriefcase,
  faBriefcaseClock,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';



const Sidebar = () => {
  

  return (
    <div className="general-sidebar">
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logo} alt="logo" />
          <h3 className="sub-logo">KodeMaven</h3>
        </Link>

        <nav>
          <ScrollLink
            
            activeClass="active"
            className="home-link"
            to="section"
            smooth={true}
            duration={1000}
          >
            <FontAwesomeIcon icon={faHome} color="#bddffa" />
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            className="portfolio-link"
            to="portfolio"
            smooth={true}
            duration={1000}
          >
            <FontAwesomeIcon icon={faBriefcase} color="#bddffa" />
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            className="experience-link"
            to="experience"
            smooth={true}
            duration={1000}
          >
            <FontAwesomeIcon icon={faBriefcaseClock} color="#bddffa" />
          </ScrollLink>

          <ScrollLink
            activeClass="active"
            className="contact-link"
            to="contact"
            smooth={true}
            duration={1000}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#bddffa" />
          </ScrollLink>

          <NavLink
            className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? "pending" : "",
                  isActive ? "active resume-link" : "",
                  isTransitioning ? "transitioning" : "",
                ].join(" ")
              }
            
            target="_blank"
            to="https://drive.google.com/file/d/1z-uBH40un8PuQIZydH9MDBBjsRGRsqIS/view?usp=drive_link"
          >
            <FontAwesomeIcon icon={faBook} color="#bddffa" />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/meshach-ekene/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#bddffa" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/arinze.meshachekene"
            >
              <FontAwesomeIcon icon={faFacebook} color="#bddffa" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/ArinzeMeshach"
            >
              <FontAwesomeIcon icon={faXTwitter} color="#bddffa" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://github.com/meshach567/"
            >
              <FontAwesomeIcon icon={faGithub} color="#bddffa" />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="http://wa.me/+2349037766269"
            >
              <FontAwesomeIcon icon={faWhatsapp} color="#bddffa" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar