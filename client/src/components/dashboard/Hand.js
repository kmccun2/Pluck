import React, { useEffect, useState } from 'react'
import HandCard from '../dashboard/HandCard'

const Hand = ({ player, setSelected, player_turn }) => {
  const [handWidth, setHandWidth] = useState(1220)

  return (
    <div className='hand' style={{ maxWidth: handWidth }}>
      {player &&
        player.hand.map((each) => (
          <HandCard
            setHandWidth={setHandWidth}
            card={each}
            key={each.id}
            bg={each.bg}
            setSelected={setSelected}
            player_turn={player_turn}
            hand={player.hand}
          />
        ))}
    </div>
  )
}

export default Hand
