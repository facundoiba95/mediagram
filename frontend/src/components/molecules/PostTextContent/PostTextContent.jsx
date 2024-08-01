import React from 'react'

const PostTextContent = ({ textContent }) => {
    return (
        <>
            {textContent && (<pre>{textContent}</pre>)}
        </>
    )
}

export default PostTextContent