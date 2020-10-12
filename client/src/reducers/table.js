import {
  NEW_GAME,
  SET_TABLE_LOADING,
  HANDLE_TRUMP_MESSAGE,
  SELECT_TRUMP,
} from '../actions/types'

const initialState = {
  players: {},
  teams: {},
  dealer: undefined,
  loading: true,
  trump: undefined,
  popup: 'greeting',
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
        loading: false,
        dealer: payload.dealer,
        popup: payload.popup,
        trump: payload.trump,
      }
    default:
      return state
  }
}
