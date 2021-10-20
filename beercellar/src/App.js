import './App.css';
import { useState} from 'react'
import BeerList from './components/BeerList';
import Header from './components/Header';
import AddBeer from './components/AddBeer';

function App () {
  const [showAddBeer, setShowAddBeer] = useState (false)

  //Fordel at have dem i App.js så de eventuelt kan bruges i andre components end bare BeerList
  const [beers, setBeers] = useState([
    {
        id: 1,
        name: 'Tuborg',
        year: 1965,
        detail: 'Good beer',
        focus: false
    },
    {
        id: 2,
        name: 'Carlsberg',
        year: 1980,
        detail: 'Okay beer',
        focus: false
    },
    {
        id: 3,
        name: 'Grimberger',
        year: 1920,
        detail: 'Dark beer',
        focus: false
    },
    {
        id: 4,
        name: 'Budweiser',
        year: 1967,
        detail: 'Great beer',
        focus: false
    }
])

// Add beer
const addBeer = (beer) => {
  const id = Math.floor(Math.random() * 1000) + 1

  const newBeer = {id, ...beer}
  setBeers([...beers, newBeer])
}

// Delete Beer
// Filter = High order array method which takes in a function
// Im showing the beer.id thats NOT equal to the ID
const deleteBeer = (id) => {
  setBeers(beers.filter((beer) => beer.id !== id))
}

// Toggle information about single beer
const toggleInformation = (id) => {
  setBeers(
    beers.map((beer) => 
    beer.id === id ? { ...beer, focus:
    !beer.focus} : beer
    )
  )
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddBeer(!showAddBeer)}/>
      {showAddBeer && <AddBeer onAdd={addBeer} />}
      {beers.length > 0 ? <BeerList beers={beers} onDelete={deleteBeer} onToggle={toggleInformation} /> : 'No beers left'}
    </div>
    
  )
}



export default App;
