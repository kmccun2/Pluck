import React, { Fragment, useEffect } from 'react'

const HandCard = ({
  setHandWidth,
  hand,
  card,
  bg,
  setSelected,
  player_turn,
}) => {
  const handleSelectCard = (card) => {
    if (player_turn === 1) {
      setSelected(card)
    }
  }
  // Change hand width based on number of cards
  useEffect(() => {
    if (hand.length === 12) setHandWidth(1220)
    if (hand.length === 11) setHandWidth(1125)
    if (hand.length === 10) setHandWidth(1030)
    if (hand.length === 9) setHandWidth(935)
    if (hand.length === 8) setHandWidth(840)
    if (hand.length === 7) setHandWidth(745)
    if (hand.length === 6) setHandWidth(650)
    if (hand.length === 5) setHandWidth(560)
    if (hand.length === 4) setHandWidth(460)
    if (hand.length === 3) setHandWidth(370)
    if (hand.length === 2) setHandWidth(265)
    if (hand.length === 1) setHandWidth(166)
  }, [hand])
  return (
    <Fragment>
      <div
        className='card'
        onClick={() => handleSelectCard(card)}
        style={{
          backgroundImage: `url(${require('../../img/PNG/' + bg + '.png')})`,
        }}
      ></div>
    </Fragment>
  )
}

export default HandCard
