import React from 'react'
import Particles from 'react-particles-js'

const Background = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: '100%',
                width: "100%",
                zIndex: -1
            }}
        >
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 60,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "color": {
                            "value": "#000"
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.01
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.05
                        },
                        "size": {
                            "value": 2
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.01
                            }
                        }
                    },

                    "retina_detect": true
                }} />
        </div>
    )
}

export default Background
