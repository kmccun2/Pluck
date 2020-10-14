import React from 'react'
import HandCard from '../dashboard/HandCard'

const Hand = ({ player, setSelected, player_turn }) => {
  return (
    <div className='hand'>
      {player &&
        player.hand.map((each) => (
          <HandCard card={each} key={each.id} bg={each.bg} setSelected={setSelected} player_turn={player_turn} />
        ))}
    </div>
  )
}

export default Hand
