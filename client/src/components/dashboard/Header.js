import React, { Fragment } from 'react'
import TeamCard from './TeamCard'
import TrumpCall from './TrumpCall'

const Header = ({ teams, trump }) => {
  return (
    <Fragment>
      {teams.length > 0 && (
        <div className='header'>
          <TeamCard team={teams[0]} />
          <TrumpCall trump={trump} />
          <TeamCard team={teams[1]} />
        </div>
      )}
    </Fragment>
  )
}

export default Header
