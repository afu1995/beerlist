import React from 'react'

function Beer({beer}) {
    return (
        <div>
            <h2> 
                This is a {beer.name}, it is a {beer.detail}
            </h2>
        </div>
    )
}

export default Beer
