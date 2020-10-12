import React from 'react'

export const PopUp = ({ type, newGame }) => {
  const handleNewGame = () => {
    newGame()
  }
  return (
    <div className='popups-container'>
      {/* For greeting */}
      {type === 'greeting' && (
        <div className='greeting' onClick={() => handleNewGame()}>
          New Game
        </div>
      )}
    </div>
  )
}
