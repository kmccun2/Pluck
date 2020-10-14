import React, { Fragment } from 'react'

const TableCard = ({ rotate, bg }) => {

  return (
    <Fragment>{bg &&
      <div className={rotate ? 'card rotate' : 'card'} style={{
          backgroundImage: `url(${require('../../img/PNG/' + bg + '.png')})`,
        }}></div>}
    </Fragment>
  )
}

export default TableCard
