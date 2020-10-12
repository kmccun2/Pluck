import React, { Fragment } from 'react'
import Alert from '../misc/Alert'
import Header from '../dashboard/Header'
import Table from '../dashboard/Table'
import Hand from '../dashboard/Hand'
import { setAlert } from '../../actions/alert'
import { newGame } from '../../actions/table'
import { connect } from 'react-redux'
import { PopUp } from '../popups/PopUp'

const Dashboard = ({ setAlert, greeting, newGame, players }) => {
  return (
    <Fragment>
      <Alert />
      {greeting ? <PopUp type={'greeting'} newGame={newGame} /> : null}
      <div className='my-container'>
        <Header />
        <Table />
        <Hand player={players[0]} />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  greeting: state.table.greeting,
  players: state.table.players,
  deck: state.table.deck,
})

export default connect(mapStateToProps, { setAlert, newGame })(Dashboard)
