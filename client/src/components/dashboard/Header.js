import React, { Fragment } from 'react'
import TeamCard from './TeamCard'
import TrumpCall from './TrumpCall'

const Header = () => {
  return (
    <Fragment>
      <div className='header'>
        <TeamCard />
        <TrumpCall />
        <TeamCard />
      </div>
    </Fragment>
  )
}

export default Header
