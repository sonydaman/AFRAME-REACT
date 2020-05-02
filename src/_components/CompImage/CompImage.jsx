import React from 'react'
import PropTypes from 'prop-types'

const CompImage = props => {
    const { src, alt } = props
    return (
        <div className='CompImage'>
            <img src={src} alt={alt} />
        </div>
    )
}
CompImage.defaultProps = {
    alt: ''
}
CompImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export { CompImage }
