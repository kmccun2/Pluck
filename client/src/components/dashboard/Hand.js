import React, { Fragment } from 'react'
import HandCard from '../dashboard/HandCard'

const Hand = ({ player }) => {
  return (
    <div className='hand'>
      {player &&
        player.hand.map((each) => (
          <HandCard card={each} key={each.id} bg={each.bg} />
        ))}
    </div>
  )
}

export default Hand
