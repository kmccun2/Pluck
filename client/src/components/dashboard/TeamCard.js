import React, { Fragment } from 'react'

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
            <div>Tricks </div>
            <div>Plucks </div>
          </div>
          <div className='team-icons'>
            <div></div>
            <div></div>
          </div>
        </Fragment>
      )}
      {/* Team 2 */}
      {team && team.id === 2 && (
        <Fragment>
          <div className='team-icons'>
            <div></div>
            <div></div>
          </div>
          <div className='team-score' style={{ textAlign: 'right' }}>
            <div>Tricks </div>
            <div>Plucks </div>
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
