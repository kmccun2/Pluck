import React, { Fragment } from 'react'
import { ImSpades, ImHeart, ImDiamonds, ImClubs } from 'react-icons/im'

const TrumpCall = ({ trump }) => {
  return (
    <Fragment>
      <div className='trump-title'>
        <div>TRUMP</div>
        <div className='trump-icon'>
          {trump === 'Spades' && (
            <ImSpades size={50} color='9c9c9c' className={'icon'} />
          )}
          {trump === 'Hearts' && (
            <ImHeart size={50} color='d02000' className={'icon'} />
          )}
          {trump === 'Diamonds' && (
            <ImDiamonds size={50} color='d02000' className={'icon'} />
          )}
          {trump === 'Clubs' && (
            <ImClubs size={50} color='9c9c9c' className={'icon'} />
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default TrumpCall
