import React from 'react'
import Button from './Button'
import BeerList from './BeerList'


function Header({title, onAdd, showAdd}) {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Beer'} onClick={onAdd}/>
            {BeerList}
        </header>
    )
}

Header.defaultProps =
{
    title: 'Beer list',
}

export default Header
