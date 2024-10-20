import './home.scss'

import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animated'
import '../AnimatedLetters/animated.scss'
import { Link as ScrollLink } from 'react-scroll'
import { Link } from 'react-router-dom'

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = [
        'M',
        'e',
        's',
        'H',
        'A',
        'C',
        'H',
        ' ',
        'A',
        'R',
        'I',
        'N',
        'Z',
        'E',
        
    ]
    const jobArray = [
        'F',
        'R',
        'O',
        'N',
        'T',
        'E',
        'N',
        'D',
        ' ',
        'D',
        'E',
        'V',
        'E',
        'L',
        'O',
        'P',
        'E',
        'R'
    ]

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>{" "}
                    <span className={`${letterClass} _14`}>&apos;m</span>
                    { " "}
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>

                <h2>Frontend Software Engineer</h2>

                <div className="buttons" >
                    <Link to="services">
                        <ScrollLink to="portfolioSection" smooth={true} duration={500}>
                            <button className="flat-button">See my Latest Works</button>
                        </ScrollLink>

                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <button className="flat-button">CONTACT ME</button>
                        </ScrollLink>

                    </Link>
                </div>
            </div>

            <div className="imageContainer">
                {/* <img
                    className="my-image"
                    src="https://res.cloudinary.com/dee9teadk/image/upload/v1717402807/my-image3_yc3f2q.png"
                    alt="Kemi"
                    loading="lazy"
                /> */}
            </div>
        </div>
    )
}

export default Home