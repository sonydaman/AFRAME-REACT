import React from 'react'
import { CompImage } from '../../_components'
import { logo } from '../../images'
const PageHome = () => {
    return (
        <div className='Page'>
            <CompImage src={logo} />
            <h2>Welcome to Aframe React App</h2>
        </div>
    )
}


export { PageHome }
