import React from 'react'
import { useSpring, animated } from 'react-spring'
import Typing from './Typing'
import IconLinks from './IconLinks'

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
            <Typing />
            <p>I'm a student at the University of Virginia studying computer science and an aspiring full-stack web developer.
            Feel free to checkout my work in the links below or contact me.
                Have a great day!</p>
            <IconLinks />
        </animated.div>
    )
}

export default Home
