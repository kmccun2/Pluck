import React, { Fragment } from 'react'
import Alert from '../misc/Alert'
import Header from '../dashboard/Header'
import Table from '../dashboard/Table'
import Hand from '../dashboard/Hand'
import { setAlert } from '../../actions/alert'
import { connect } from 'react-redux'

const Dashboard = ({ setAlert }) => {
  return (
    <Fragment>
      <Alert />
      <div className='my-container'>
        <Header />
        <Table />
        <Hand />
      </div>
    </Fragment>
  )
}

export default connect(null, { setAlert })(Dashboard)
