import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { handleTrumpMessage } from '../../actions/table'
import { ImSpades, ImHeart, ImClubs, ImDiamonds } from 'react-icons/im'
import { selectTrump } from '../../actions/table'

const PopUp = ({
  popup,
  newGame,
  dealer,
  handleTrumpMessage,
  trump,
  selectTrump,
}) => {
  return (
    <div className='popups-container'>
      {/* Greeting */}
      {popup === 'greeting' && (
        <div
          className='popup-msg'
          style={{ cursor: 'pointer' }}
          onClick={() => newGame()}
        >
          New Game
        </div>
      )}
      {/* Trump selection */}
      {popup === 'mytrump' && (
        <div className='popup-msg'>
          <div>You're the dealer! Select a trump suit.</div>
          <div className='trump-icons'>
            <ImSpades
              size={50}
              color='9c9c9c'
              onClick={() => selectTrump('Spades')}
              className={'icon'}
            />
            <ImHeart
              size={50}
              color='d02000'
              onClick={() => selectTrump('Hearts')}
              className={'icon'}
            />
            <ImClubs
              size={50}
              color='9c9c9c'
              onClick={() => selectTrump('Clubs')}
              className={'icon'}
            />
            <ImDiamonds
              size={50}
              color='d02000'
              onClick={() => selectTrump('Diamonds')}
              className={'icon'}
            />
          </div>
        </div>
      )}
      {/* Opponent trump selection */}
      {popup === 'opptrump' && (
        <div
          className='popup-msg'
          style={{ cursor: 'pointer' }}
          onClick={() => handleTrumpMessage()}
        >
          {dealer && dealer.name} is the dealer! The trump suit is {trump}.
        </div>
      )}
      {/* Select a card */}
      {popup === 'select' && <div className='popup-msg'>Select a card!</div>}
    </div>
  )
}

export default connect(null, { handleTrumpMessage, selectTrump })(PopUp)
