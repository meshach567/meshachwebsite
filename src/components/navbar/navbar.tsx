
import './navbar.scss'
import { useEffect, useState } from 'react'
import Logo from "/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'


const Navbar = () => {
  const [showMobileContent, setShowMobileContent] = useState(false)


  const toggleMobileContent = () => {
    setShowMobileContent(!showMobileContent)
  }

  const closeMobileContent = () => {
    setShowMobileContent(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const navbar = document.querySelector('.small-screens')
      if (navbar && !navbar.contains(event.target)) {
        closeMobileContent()
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, []) 


  return (
    <>
      {/* navbar for phone-tab view */}
      <div className="small-screens">
        <div className="navbar">
          <div className="nav">
            <div className="logo">
              <img src={Logo} alt="" />
              <h3>KodeMaven</h3>
            </div>
            <div className="toggleButton">
              <button onClick={toggleMobileContent}>
                {showMobileContent ? (
                  <FontAwesomeIcon icon={faTimes} className="tog" />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="tog" />
                )}
              </button>
            </div>
          </div>

          <div
            className={`bg  ${
              showMobileContent
                ? 'visible animate__animated animate__fadeInBottomRight'
                : 'hidden'
            }`}
          >
            <ul className="navigationItems">
              <ScrollLink
                className="navLinks"
                to="section"
                smooth={true}
                duration={1000}
              >
                <li onClick={closeMobileContent}>Home</li>
              </ScrollLink>

              <ScrollLink
                className="navLinks"
                to="experience"
                smooth={true}
                duration={1000}
              >
                <li onClick={closeMobileContent}>Experience</li>
              </ScrollLink>

              <ScrollLink
                className="navLinks"
                to="services"
                smooth={true}
                duration={1000}
              >
                <li onClick={closeMobileContent}>Services</li>
              </ScrollLink>

              <ScrollLink
                className="navLinks"
                to="portfolio"
                smooth={true}
                duration={1000}
              >
                <li onClick={closeMobileContent}>Portfolio</li>
              </ScrollLink>

              <ScrollLink
                className="navLinks"
                to="contact"
                smooth={true}
                duration={1000}
              >
                <li onClick={closeMobileContent}>Contact</li>
              </ScrollLink>

              <Link
                to="https://drive.google.com/file/d/1z-uBH40un8PuQIZydH9MDBBjsRGRsqIS/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="resume navLinks"
              >
                <li onClick={closeMobileContent}>Resume</li>
              </Link>
            </ul>

            <div className="socialIcons">
              <ul>
                <li onClick={closeMobileContent}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/oluwakemioluwadahunsi/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} color="#0c0c1d" />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    target="_blank"
                    rel="noopenener noreferrer"
                    href="https://www.facebook.com/kaliceagbabiaka1"
                  >
                    <FontAwesomeIcon icon={faFacebook} color="#0c0c1d" />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/km_oluwadahunsi"
                  >
                    <FontAwesomeIcon icon={faXTwitter} color="#0c0c1d" />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Kemi-Oluwadahunsi/"
                  >
                    <FontAwesomeIcon icon={faGithub} color="#0c0c1d" />
                  </a>
                </li>

                <li onClick={closeMobileContent}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/+2348146433203"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} color="#0c0c1d" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar