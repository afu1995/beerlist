import React from 'react'
import Beer from './Beer'


function BeerList({beers, onDelete, onToggle}) {
    

    //Map method takes in a function as an argument
    const beerList =  beers.map(beer => <Beer key={beer.id} beer={beer} onDelete={onDelete} onToggle={onToggle} /> )

    return (

                <div className="beerlist">
                    {beerList}
                </div>
    )
}

export default BeerList
