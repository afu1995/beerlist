import React from 'react'

function beerList() {
    const beers = ['Carlsberg', 'Grimberger', 'Tuborg', 'Budweiser']

    //Map method takes in a function as an argument
    const BeerList =  beers.map(beer => <h2>{beer}</h2>)
    return (
        <div>{BeerList}</div>
    )
} 

export default beerList
