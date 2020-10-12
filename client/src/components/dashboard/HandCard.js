import React, { Fragment } from 'react'

const HandCard = ({ card, bg }) => {
  return (
    <Fragment>
      <div
        className='card'
        style={{
          backgroundImage: `url(${require('../../img/PNG/' + bg + '.png')})`,
        }}
      ></div>
    </Fragment>
  )
}

export default HandCard
