import React from 'react'
import Lottie from 'react-lottie'
import * as correct from '../correct.json'

const defaultOptions = {
    loop: true,
    autoplay:true,
    animationData: correct.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Correct = () => {
    return(
        <div style={{marginTop:'-50px'}}>
            <Lottie options={defaultOptions}  height={100} width={100}/>
        </div>
    )
}

export default Correct