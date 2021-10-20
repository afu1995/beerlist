import React from 'react'
import { FaTimes} from 'react-icons/fa'

function Beer({beer, onDelete, onToggle}) {


    return (
        <div className={`beer ${beer.focus ? 'focus' : ''}`} onDoubleClick={() => onToggle(beer.id)}>
            <h3>{beer.name} <FaTimes style={{ color:'red', cursor:'pointer'}} onClick={() => onDelete(beer.id)}/></h3>
            <p>is a {beer.detail} from {beer.year}</p>                
        </div>
    )
}

export default Beer
