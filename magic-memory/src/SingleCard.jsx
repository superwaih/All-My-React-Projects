import React from 'react'

const SingleCard = ({card, handleChoice}) => {
    const handleClick = () =>{
        handleChoice(card)
    }
  return (
    <div className='card' >
        <div>
            <img src={card.src}  alt="card back" />
            <img src="/img/cover.png" 
            onClick={handleClick} 
            alt='back' />

        </div>
    </div>
  )
}

export default SingleCard