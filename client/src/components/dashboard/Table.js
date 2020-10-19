import React, { Fragment } from 'react'
import TableCard from './TableCard'

const Table = ({ players }) => {
  return (
    <Fragment>
      <div className='table'>
        {/* Player 2 */}
        <div className='table-left'>
          {players.length === 4 && (
            <TableCard
              bg={players[1].throw && players[1].throw.bg}
              rotate={true}
              winner={players[1].throw.winner}
            />
          )}
        </div>
        <div className='table-middle'>
          <div className='middle-top'>
            {/* Player 3 */}
            {players.length === 4 && (
              <TableCard
                bg={players[2].throw && players[2].throw.bg}
                winner={players[2].throw.winner}
              />
            )}
          </div>
          <div className='middle-bottom'>
            {/* User */}
            {players.length === 4 && (
              <TableCard
                bg={players[0].throw && players[0].throw.bg}
                winner={players[0].throw.winner}
              />
            )}
          </div>
        </div>
        <div className='table-right'>
          {/* Player 4 */}
          {players.length === 4 && (
            <TableCard
              bg={players[3].throw && players[3].throw.bg}
              rotate={true}
              winner={players[3].throw.winner}
            />
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
