import React from 'react'
import Lottie from 'react-lottie'
import * as loading from '../loading.json'

const defaultOptions = {
    loop: true,
    autoplay:true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}

const Loading = () => {
    return(
        <div>
            <Lottie options={defaultOptions}  height={150} width={150}/>
        </div>
    )
}

export default Loading