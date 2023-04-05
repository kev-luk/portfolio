import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { MdDescription } from 'react-icons/md'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const IconLinks = () => {
    return (
        <div className="d-flex justify-content-around align-items">
            <OverlayTrigger
                placement="bottom"
                overlay={
                    <Tooltip id="button-tooltip" >
                        LinkedIn
                    </Tooltip>
                }
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
                        GitHub
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
                    href="mailto:luk3388@gmail.com"
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
                    href={process.env.PUBLIC_URL + "/doc/KevinLukResume.pdf"}
                    download
                    style={{ color: 'black' }}
                >
                    <MdDescription className="icon" />
                </a>
            </OverlayTrigger>
        </div>
    )
}

export default IconLinks
