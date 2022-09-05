import './App.css'
import {useState, useEffect} from 'react'
import SingleCard from './SingleCard'

const cardImages = [
  {"src": "/img/helmet-1.png", "matched":false},
  {"src": "/img/potion-1.png", "matched":false},
  {"src": "/img/ring-1.png", "matched":false},
  {"src": "/img/scroll-1.png", "matched":false},
  {"src": "/img/shield-1.png", "matched":false},
  {"src": "/img/sword-1.png", "matched":false}
]

function App() {
  const[cards, setCards] = useState([])
  const[turns, setTurns] = useState(0)
  const[choiceOne, setChoiceOne] = useState(null)
  const[choiceTwo, setChoiceTwo] = useState(null)

  const handleChoice = (card)=>{
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  
  useEffect(() => {
    if(choiceOne && choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prev => {
          return prev.map(card =>{
            if(card.src === choiceOne.src){
              console.log("matched")
              return{...card, matched:true}
            }else{
              return card
            }
          })
        })
        resetTurn()
      }else{
        resetTurn()
      }
      
    }
  }, [choiceOne, choiceTwo])
  const resetTurn = () =>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1);
  }
  

  const shuffleCards = () =>{
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    setTurns(0)
    console.log(shuffledCards)
  }
  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} >New Game</button>

      <div className="card-grid">
       {cards.map((card) => {
         return <SingleCard 
         handleChoice={handleChoice}
         card={card} 
         key={card.id} />
       })}
      </div>
    </div>
  );
}

export default App