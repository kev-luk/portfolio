import React from 'react'
import Typewriter from 'typewriter-effect'

const Typing = () => {
    return (
        <div className="typewriter">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString('Hello World!')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('How are you?')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString("I'm Kevin Luk👋")
                        .start()
                }}
            />
        </div>
    )
}

export default Typing
