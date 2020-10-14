import React, { Fragment, useEffect, useState } from 'react'
import TableCard from './TableCard'

const Table = ({throws, turn, lead}) => {

  const [throwOne, setThrowOne] = useState(undefined)
  const [throwTwo, setThrowTwo] = useState(undefined)
  const [throwThree, setThrowThree] = useState(undefined)
  const [throwFour, setThrowFour] = useState(undefined)

  useEffect(() => {
// Assign throws to each player
    if (lead === 1) {
      if (throws.length > 0) setThrowOne(throws[0].bg)
      if (throws.length > 1) setThrowTwo(throws[1].bg)
      if (throws.length > 2) setThrowThree(throws[2].bg)
      if (throws.length > 3) setThrowFour(throws[3].bg)
    } else if (lead === 2) {
      if (throws.length > 0) setThrowTwo(throws[0].bg)
      if (throws.length > 1) setThrowThree(throws[1].bg)
      if (throws.length > 2) setThrowFour(throws[2].bg)
      if (throws.length > 3) setThrowOne(throws[3].bg)
    } else if (lead === 3) {
      if (throws.length > 0) setThrowThree(throws[0].bg)
      if (throws.length > 1) setThrowFour(throws[1].bg)
      if (throws.length > 2) setThrowOne(throws[2].bg)
      if (throws.length > 3) setThrowTwo(throws[3].bg)
    } else if (lead === 4) {
      if (throws.length > 0) setThrowFour(throws[0].bg)
      if (throws.length > 1) setThrowOne(throws[1].bg)
      if (throws.length > 2) setThrowTwo(throws[2].bg)
      if (throws.length > 3) setThrowThree(throws[3].bg)
    } 
  }, [throws, turn])
  return (
    <Fragment>
      <div className='table'>
        {/* Player 2 */}
        <div className='table-left'>
          <TableCard bg={throwTwo} rotate={true} />
        </div>
        <div className='table-middle'>
          <div className='middle-top'>
          {/* Player 3 */}
          <TableCard bg={throwThree}/>
          </div>
          <div className='middle-bottom'>
          {/* User */}
          <TableCard bg={throwOne}/></div>
        </div>
        <div className='table-right'>
          {/* Player 4 */}
          <TableCard bg={throwFour} rotate={true} />
        </div>
      </div>
    </Fragment>
  )
}

export default Table
