import {
  NEW_GAME,
  SET_TABLE_LOADING,
  HANDLE_TRUMP_MESSAGE,
  SELECT_TRUMP,
  MAKE_THROW
} from '../actions/types'

const initialState = {
  players: {},
  teams: {},
  throws: [],
  cardsleft: [],
  dealer: undefined,
  loading: true,
  lead: undefined,
  trump: undefined,
  popup: 'greeting',
  player_turn: undefined,
  error: {},
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_TABLE_LOADING:
      return {
        ...state,
        loading: true,
      }
    case HANDLE_TRUMP_MESSAGE:
      return {
        ...state,
        popup: undefined,
      }
    case SELECT_TRUMP:
      return {
        ...state,
        trump: payload.trump,
        popup: 'select',
      }
    case NEW_GAME:
      return {
        ...state,
        players: payload.players,
        teams: payload.teams,
        dealer: payload.dealer,
        popup: payload.popup,
        trump: payload.trump,
        player_turn: payload.player_turn,
        cardsleft: payload.cardsleft,
        lead: payload.lead,
        loading: false,
      }
    case MAKE_THROW:
      return {
        ...state,
        players: payload.players,
        teams: payload.teams,
        dealer: payload.dealer,
        popup: payload.popup,
        trump: payload.trump,
        player_turn: payload.player_turn,
        throws: payload.throws,
        cardsleft: payload.cardsleft,
        lead: payload.lead,
        loading: false,
      }
    default:
      return state
  }
}
