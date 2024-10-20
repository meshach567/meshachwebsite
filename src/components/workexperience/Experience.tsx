
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import './experience.scss'
import { useState } from 'react'

const experiences = [
    {
        id: 3,
        title: 'Remote Frontend Engineer',
        company: ' zormor (  London, Englan)',
        startDate: 'May 2024– ',
        endDate: 'Present',
        details: [
            {
                id: 1,
                detail:
                    ' Optimize the admin user for Events, Categories, and Business, enhancing search, and boosting user engagementby 30%',
            },

            {
                id: 2,
                detail:
                    ' ● Streamline API designs, reducing response times by 40% and improving data handling efficiency.',
            },

            {
                id: 3,
                detail: ' ● Pioneer the development of the website with Nuxt frontend for the API, implementing various user interface features that received positive feedback from users in internal testing.'
            },

            
        ],
    },

    {
        id: 2,
        title: ' Remote Frontend Engineer',
        company: 'FuelMyHustle ( Nottingham, England)',
        startDate: ' July 2023–  July 2023– Dec 202',
        endDate: ' July 2023– Dec 2023',
        details: [
            {
                id: 1,
                detail:
                    ' Boosted website performance through code optimization, and reduced load times by 35%..',
            },

            {
                id: 2,
                detail:
                    'Contributed to the developing React frontend for the API, implementing various user interface features.',
            },
            {
                id: 3,
                detail: 'Revitalized the codebase, enhancing maintainability, and reduced bug reports by 25%'
            },
        ],
    },

    {
        id: 1,
        title: 'Software Developer',
        company: 'Kodemaven (freelancing)',
        startDate: '01/2022',
        endDate: 'Present',

        details: [
            {
                id: 1,
                detail:
                    ' Implemented robust security measures, safeguarding user data and maintaining compliance with industry standards, resulting in a 50% reduction in security incidents.',
            },

            {
                id: 2,
                detail:
                    ' Designed an FAQ section, improving user experience, and reducing customer support inquiries by 25%',
            },
        ],
    },
]

const Each = ({ experience }: any) => {
    const [flipped, setFlipped] = useState(false)
    const handleCardClick = () => {
        if (window.innerWidth < 768) { // Check for mobile and tablet screens
            setFlipped(!flipped)
        }
    }
    return (
        <div
            className={`cards`}
        // onClick={handleCardClick}
        >
            <div className={`card-single ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                <div className="card front">
                    <div className="expBody">
                        <h2 className="expT">{experience.title}</h2>
                        <div className="date">
                            <span>
                                {experience.startDate} - <span>{experience.endDate}</span>
                            </span>
                        </div>
                        <h2 className="company">{experience.company}</h2>
                    </div>
                </div>

                <div className="card back">
                    <div className="details">
                        <div className="detail-title">
                            <h4>Job Details</h4>
                            <FontAwesomeIcon icon={faArrowDown} />
                        </div>

                        <div className="description">
                            {experience.details.map((data: any) => (
                                <div key={data.id} className="describe">
                                    <FontAwesomeIcon icon={faDotCircle} className="dotIcon" />
                                    <p>{data.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Experience = () => {
    return (
        <div className="experience">
            <div className="experienceContain">
                <h1>Work Experience</h1>
                <p className="click-card animate__animated animate__heartBeat animate__infinite	infinite animate__slower">
                    Click Each card to view Job Details
                </p>

                <div className="card-wrapper">
                    {experiences.map((item) => (
                        <Each experience={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
