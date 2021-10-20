import React from 'react'
import Button from './Button'
import BeerList from './BeerList'


function Header({title, onAdd}) {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add beer' onClick={onAdd}/>
            {BeerList}
        </header>
    )
}

Header.defaultProps =
{
    title: 'Beer list',
}

export default Header
