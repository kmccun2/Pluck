import React, { Fragment, useEffect, useState } from 'react'
import Alert from '../misc/Alert'
import Header from '../dashboard/Header'
import Table from '../dashboard/Table'
import Hand from '../dashboard/Hand'
import { setAlert } from '../../actions/alert'
import { newGame, makeThrow } from '../../actions/table'
import { connect } from 'react-redux'
import PopUp from '../../components/popups/PopUp'

const Dashboard = ({
  popup,
  newGame,
  players,
  teams,
  dealer,
  trump,
  throws,
  cardsleft,
  player_turn,
  lead,
  makeThrow,
}) => {
  // Create variable for user's selected card
  const [selected, setSelected] = useState(undefined)
  // When ready, make a throw
  useEffect(() => {
    // if user's turn, wait for card selection
    if (trump !== undefined && (popup === undefined || popup === 'select')) {
      makeThrow(players, dealer, teams, trump, popup, throws, cardsleft, player_turn, lead, selected)
      console.log(selected)
    }
    
  }, [trump, popup, player_turn, selected])

  return (
    <Fragment>
      <Alert />
      {popup !== undefined ? (
        <PopUp popup={popup} newGame={newGame} dealer={dealer} trump={trump} />
      ) : null}
      <div className='my-container'>
        <Header teams={teams} trump={trump} />
        <Table throws={throws} turn={player_turn} lead={lead}/>
        <Hand player={players[0]} setSelected={setSelected} player_turn={player_turn} />
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
  player_turn: state.table.player_turn,
  throws: state.table.throws,
  cardsleft: state.table.cardsleft,
  lead: state.table.lead
})

export default connect(mapStateToProps, { setAlert, newGame, makeThrow })(
  Dashboard
)
