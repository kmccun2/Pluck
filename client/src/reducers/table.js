import { NEW_GAME, SET_TABLE_LOADING } from '../actions/types'

const initialState = {
  players: {},
  teams: {},
  loading: true,
  greeting: true,
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
    case NEW_GAME:
      return {
        ...state,
        players: payload.players,
        teams: payload.teams,
        loading: false,
        greeting: false,
      }
    default:
      return state
  }
}
