import { FormHelperText } from '@material-ui/core'
import React, { Fragment } from 'react'
import TableCard from './TableCard'

const Table = () => {
  return (
    <Fragment>
      <div className='table'>
        {/* Player 2 */}
        <div className='table-left'>
          <TableCard rotate={true} />
        </div>
        <div className='table-middle'>
          {/* Player 3 */}
          <TableCard />
          {/* User */}
          <TableCard />
        </div>
        <div className='table-right'>
          {/* Player 4 */}
          <TableCard rotate={true} />
        </div>
      </div>
    </Fragment>
  )
}

export default Table
