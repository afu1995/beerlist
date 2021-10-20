import React from 'react'
import Button from './Button'
import BeerList from './BeerList'


function Header(props) {
    const onClick = () => {
        console.log('click')
    }



    return (
        <header className="header">
            <h1>{props.title}</h1>
            <Button color='green' text='Add beer' onClick={onClick}/>
            {BeerList}
        </header>
    )
}

Header.defaultProps =
{
    title: 'Beer list',
}

export default Header
