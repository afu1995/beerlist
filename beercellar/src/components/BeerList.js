import React from 'react'
import Beer from './Beer'

function beerList() {
    const beers = [
        {
            id: 1,
            name: 'Tuborg',
            detail: 'Good beer'
        },
        {
            id: 2,
            name: 'Carlsberg',
            detail: 'Okay beer'
        },
        {
            id: 3,
            name: 'Grimberger',
            detail: 'Dark beer'
        },
        {
            id: 4,
            name: 'Budweiser',
            detail: 'Great beer'
        }
    ]

    //Map method takes in a function as an argument
    const beerList =  beers.map(beer => <Beer beer={beer} /> )
    return (
        <div>{beerList}</div>
    )
} 

export default beerList
