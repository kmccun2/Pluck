import React, { Fragment, useEffect, useState } from 'react'
import Alert from '../misc/Alert'
import Header from '../dashboard/Header'
import Table from '../dashboard/Table'
import Hand from '../dashboard/Hand'
import { setAlert } from '../../actions/alert'
import { newGame, makeThrow, throwsReset } from '../../actions/table'
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
  winningplayer,
  throwsReset,
}) => {
  // Create variable for user's selected card
  const [selected, setSelected] = useState(undefined)

  // When ready, make a throw
  useEffect(() => {
    // Make a throw
    if (
      trump !== undefined &&
      throws.length < 4 &&
      (popup === undefined || popup === 'select')
    ) {
      // User's turn
      if (player_turn === 1 && selected !== undefined) {
        makeThrow(
          players,
          dealer,
          teams,
          trump,
          popup,
          throws,
          cardsleft,
          player_turn,
          lead,
          selected,
          winningplayer
        )
        setSelected(undefined)

        // CPU's throw
      } else {
        setTimeout(function () {
          makeThrow(
            players,
            dealer,
            teams,
            trump,
            popup,
            throws,
            cardsleft,
            player_turn,
            lead,
            selected,
            winningplayer
          )
        }, 400)
      }
    }
    // Pause to show results then clear board
    // eslint-disable-next-line
  }, [trump, popup, player_turn, selected, throws.length])

  // throwsReset when all 4 players have thrown
  useEffect(() => {
    if (throws.length === 4) {
      setTimeout(function () {
        throwsReset(players, lead, popup)
      }, 2000)
    }
  }, [throwsReset, cardsleft, players, throws, lead, popup])

  return (
    <Fragment>
      <Alert />
      {popup !== undefined ? (
        <PopUp
          popup={popup}
          newGame={newGame}
          dealer={dealer}
          trump={trump}
          players={players}
        />
      ) : null}
      <div className='my-container'>
        <Header teams={teams} trump={trump} />
        <Table players={players} />
        <Hand
          player={players[0]}
          setSelected={setSelected}
          player_turn={player_turn}
        />
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
  lead: state.table.lead,
  winningplayer: state.table.winningplayer,
  resetting: state.table.resetting,
})

export default connect(mapStateToProps, {
  setAlert,
  newGame,
  makeThrow,
  throwsReset,
})(Dashboard)
