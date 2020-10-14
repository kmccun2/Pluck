import React, { Fragment } from 'react'

const HandCard = ({ card, bg, setSelected, player_turn }) => {
  const handleSelectCard = (card) => {
    if (player_turn === 1) {
      setSelected(card)
    }
  }
  return (
    <Fragment>
      <div
        className='card'
        onClick={()=>handleSelectCard(card)}
        style={{
          backgroundImage: `url(${require('../../img/PNG/' + bg + '.png')})`,
        }}
      ></div>
    </Fragment>
  )
}

export default HandCard
