import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { MdDescription } from 'react-icons/md'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import resume from '../components/KevinLukResume.pdf'
import { useSpring, animated } from 'react-spring'

const Home = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 500
        }
    })

    return (
        <animated.div style={props} className="text-center home">
            <h1>I am Kevin Luk</h1>
            <p>I'm a student at the University of Virginia studying computer science and an aspiring full-stack web developer.
            Feel free to checkout my work in the links below or contact me.
                Have a great day!</p>
            <div className="d-flex justify-content-around align-items">
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="button-tooltip" >
                            LinkedIn
                    </Tooltip>
                    }
                    cl
                >
                    <a
                        href="https://www.linkedin.com/in/kevin-luk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'black' }}
                    >
                        <AiFillLinkedin className="icon" />
                    </a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="button-tooltip" >
                            Github
                    </Tooltip>
                    }
                >
                    <a
                        href="https://github.com/kev-luk"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'black' }}
                    >
                        <AiFillGithub className="icon" />
                    </a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="button-tooltip" >
                            Email
                    </Tooltip>
                    }
                >
                    <a
                        href="mailto:khl7wh@virginia.edu"
                        style={{ color: 'black' }}
                    >
                        <FiMail className="icon" />
                    </a>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="bottom"
                    overlay={
                        <Tooltip id="button-tooltip" >
                            Resume
                    </Tooltip>
                    }
                >
                    <a
                        href={resume}
                        download
                        style={{ color: 'black' }}
                    >
                        <MdDescription className="icon" />
                    </a>
                </OverlayTrigger>
            </div>
        </animated.div>
    )
}

export default Home
