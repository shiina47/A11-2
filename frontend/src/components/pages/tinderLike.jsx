import axios from 'axios';
import React, { useState, useMemo, useEffect } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

const alreadyRemoved = []// This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.


export function Advanced() {
  const [recipes, setRecipes] = useState([]);
  const [lastDirection, setLastDirection] = useState()

  useEffect(() => {
    axios.
    get('http://127.0.0.1:8000/api/recipe/')
    .then(res => {
      setRecipes(res.data);
    })
  }, []);

  const childRefs = useMemo(() => Array(recipes.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    if (direction === "Left" ){
      console.log('Nope');
    } else {
    console.log("LIKE!!");
    }
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (title) => {
    console.log(title + ' left the screen!')
  }

  const swipe = (dir) => {
    const cardsLeft = recipes.filter(recipe => !alreadyRemoved.includes(recipe.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = recipes.map(recipe => recipe.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Reciper</h1>
      <div className='cardContainer'>
        {recipes.map((recipes, index) =>
          <TinderCard ref={childRefs[index]} className='swipe' key={recipes.id} onSwipe={(dir) => swiped(dir, recipes.title)} onCardLeftScreen={() => outOfFrame(recipes.title)}>
            <div style={{ backgroundImage: 'url= {recipes.image}' }} className='card'>
              <h3>{recipes.title}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 key={lastDirection} className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText'>Swipe a card or press a button to get started!</h2>}
    </div>
  )
}

export default Advanced