import React, { Fragment } from 'react'
import Alert from '../misc/Alert'
import Header from '../dashboard/Header'
import Table from '../dashboard/Table'
import Hand from '../dashboard/Hand'
import { setAlert } from '../../actions/alert'
import { newGame } from '../../actions/table'
import { connect } from 'react-redux'
import PopUp from '../../components/popups/PopUp'

const Dashboard = ({ popup, newGame, players, teams, dealer, trump }) => {
  return (
    <Fragment>
      <Alert />
      {popup !== undefined ? (
        <PopUp popup={popup} newGame={newGame} dealer={dealer} trump={trump} />
      ) : null}
      <div className='my-container'>
        <Header teams={teams} trump={trump} />
        <Table />
        <Hand player={players[0]} />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  popup: state.table.popup,
  players: state.table.players,
  deck: state.table.deck,
  dealer: state.table.dealer,
  trump: state.table.trump,
  teams: state.table.teams,
})

export default connect(mapStateToProps, { setAlert, newGame })(Dashboard)
