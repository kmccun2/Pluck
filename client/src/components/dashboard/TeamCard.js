import React, { Fragment } from 'react'
import Plucks from './Plucks'
import Tricks from './Tricks'

const TeamCard = ({ team }) => {
  return (
    <div className='team-card'>
      {/* Team 1 */}
      {team && team.id === 1 && (
        <Fragment>
          <div className='team-name-container'>
            <div className='team-name' style={{ transform: 'rotate(270deg)' }}>
              TEAM 1
            </div>
          </div>
          <div className='team-score'>
            <div className='tricks-container'><div>Tricks </div><Tricks teamdealer={true} tricks={team.tricks} /></div>
      <div className='plucks-container'><div>Plucks </div><Plucks teamdealer={true} /></div>
          </div>
        </Fragment>
      )}
      {/* Team 2 */}
      {team && team.id === 2 && (
        <Fragment>
          <div className='team-score' style={{ alignItems: 'flex-end'}}>
            <div className='tricks-container'><Tricks teamdealer={true} tricks={team.tricks}/><div>Tricks </div></div>
      <div className='plucks-container'><Plucks teamdealer={true} /><div>Plucks </div></div>
          </div>
          <div className='team-name-container'>
            <div className='team-name' style={{ transform: 'rotate(90deg)' }}>
              TEAM 2
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default TeamCard
