import React from 'react'
import { useSpring, animated } from 'react-spring'
import Typing from './Typing'
import IconLinks from './IconLinks'

const Home = () => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: {
            duration: 1000
        }
    })

    return (
        <animated.div style={props} className="text-center home">
            <Typing />
            <p className="description">
                I'm a student at the University of Virginia studying computer science and an aspiring full stack web developer.
                Feel free to check out my work in the links below or contact me.
                Have a great day!
            </p>
            <IconLinks />
            <p className="footer">
                "The future belongs to those who believe in the beauty of their dreams."
            </p>
        </animated.div>
    )
}

export default Home
