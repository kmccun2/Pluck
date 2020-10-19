import React, { Fragment } from 'react'

const TableCard = ({ rotate, bg, winner }) => {
  return (
    <Fragment>
      {bg && (
        <div
          className={rotate ? 'card rotate' : 'card'}
          style={
            winner
              ? {
                  backgroundImage: `url(${require('../../img/PNG/' +
                    bg +
                    '.png')})`,
                  boxShadow: '0 0 9px 6px #2fe3ff',
                }
              : {
                  backgroundImage: `url(${require('../../img/PNG/' +
                    bg +
                    '.png')})`,
                }
          }
        ></div>
      )}
    </Fragment>
  )
}

export default TableCard
