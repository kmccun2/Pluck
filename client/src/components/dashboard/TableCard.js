import React, { Fragment } from 'react'

const TableCard = ({ rotate }) => {
  return (
    <Fragment>
      <div className={rotate ? 'card rotate' : 'card'}></div>
    </Fragment>
  )
}

export default TableCard
