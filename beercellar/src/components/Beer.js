import React from 'react'
import { FaTimes} from 'react-icons/fa'

function Beer({beer, onDelete, onToggle}) {


    return (
        <div className={`beer ${beer.focus ? 'focus' : ''}`} onDoubleClick={() => onToggle(beer.id)}>                

            {beer.focus ? <p> {beer.name} is a {beer.detail} from {beer.year} <FaTimes style={{ color:'red', cursor:'pointer'}} onClick={() => onDelete(beer.id)}/> </p> 
            : <h3>{beer.name} </h3> }
                
                
            
            

        </div>
    )
}

export default Beer
