import { NEW_GAME } from '../actions/types'

const initialState = {
  players: [
    { id: 1, name: 'Player 1', hand: [] },
    { id: 2, name: 'Player 2', hand: [] },
    { id: 3, name: 'Player 3', hand: [] },
    { id: 4, name: 'Player 4', hand: [] },
  ],
  teams: [
    { id: 1, plucks: 0, tricks: 0, name: 'Team Red', players: [] },
    { id: 2, plucks: 0, tricks: 0, name: 'Team Blue', players: [] },
  ],
  deck: [
    { id: 1, card: 'Ace of Spades', value: 14, suit: 'Spades' },
    { id: 2, card: '2 of Spades', value: 2, suit: 'Spades' },
    { id: 3, card: '3 of Spades', value: 3, suit: 'Spades' },
    { id: 4, card: '4 of Spades', value: 4, suit: 'Spades' },
    { id: 5, card: '5 of Spades', value: 5, suit: 'Spades' },
    { id: 6, card: '6 of Spades', value: 6, suit: 'Spades' },
    { id: 7, card: '7 of Spades', value: 7, suit: 'Spades' },
    { id: 8, card: '8 of Spades', value: 8, suit: 'Spades' },
    { id: 9, card: '9 of Spades', value: 9, suit: 'Spades' },
    { id: 10, card: '10 of Spades', value: 10, suit: 'Spades' },
    { id: 11, card: 'Jack of Spades', value: 11, suit: 'Spades' },
    { id: 12, card: 'Queen of Spades', value: 12, suit: 'Spades' },
    { id: 13, card: 'King of Spades', value: 13, suit: 'Spades' },
    { id: 14, card: 'Ace of Hearts', value: 14, suit: 'Hearts' },
    { id: 15, card: '2 of Hearts', value: 2, suit: 'Hearts' },
    { id: 16, card: '3 of Hearts', value: 3, suit: 'Hearts' },
    { id: 17, card: '4 of Hearts', value: 4, suit: 'Hearts' },
    { id: 18, card: '5 of Hearts', value: 5, suit: 'Hearts' },
    { id: 19, card: '6 of Hearts', value: 6, suit: 'Hearts' },
    { id: 20, card: '7 of Hearts', value: 7, suit: 'Hearts' },
    { id: 21, card: '8 of Hearts', value: 8, suit: 'Hearts' },
    { id: 22, card: '9 of Hearts', value: 9, suit: 'Hearts' },
    { id: 23, card: '10 of Hearts', value: 10, suit: 'Hearts' },
    { id: 24, card: 'Jack of Hearts', value: 11, suit: 'Hearts' },
    { id: 25, card: 'Queen of Hearts', value: 12, suit: 'Hearts' },
    { id: 26, card: 'King of Hearts', value: 13, suit: 'Hearts' },
    { id: 27, card: 'Ace of Diamonds', value: 14, suit: 'Diamonds' },
    { id: 28, card: '2 of Diamonds', value: 2, suit: 'Diamonds' },
    { id: 29, card: '3 of Diamonds', value: 3, suit: 'Diamonds' },
    { id: 30, card: '4 of Diamonds', value: 4, suit: 'Diamonds' },
    { id: 31, card: '5 of Diamonds', value: 5, suit: 'Diamonds' },
    { id: 32, card: '6 of Diamonds', value: 6, suit: 'Diamonds' },
    { id: 33, card: '7 of Diamonds', value: 7, suit: 'Diamonds' },
    { id: 34, card: '8 of Diamonds', value: 8, suit: 'Diamonds' },
    { id: 35, card: '9 of Diamonds', value: 9, suit: 'Diamonds' },
    { id: 36, card: '10 of Diamonds', value: 10, suit: 'Diamonds' },
    { id: 37, card: 'Jack of Diamonds', value: 11, suit: 'Diamonds' },
    { id: 38, card: 'Queen of Diamonds', value: 12, suit: 'Diamonds' },
    { id: 39, card: 'King of Diamonds', value: 13, suit: 'Diamonds' },
    { id: 40, card: 'Ace of Clubs', value: 14, suit: 'Clubs' },
    { id: 41, card: '2 of Clubs', value: 2, suit: 'Clubs' },
    { id: 42, card: '3 of Clubs', value: 3, suit: 'Clubs' },
    { id: 43, card: '4 of Clubs', value: 4, suit: 'Clubs' },
    { id: 44, card: '5 of Clubs', value: 5, suit: 'Clubs' },
    { id: 45, card: '6 of Clubs', value: 6, suit: 'Clubs' },
    { id: 46, card: '7 of Clubs', value: 7, suit: 'Clubs' },
    { id: 47, card: '8 of Clubs', value: 8, suit: 'Clubs' },
    { id: 48, card: '9 of Clubs', value: 9, suit: 'Clubs' },
    { id: 49, card: '10 of Clubs', value: 10, suit: 'Clubs' },
    { id: 50, card: 'Jack of Clubs', value: 11, suit: 'Clubs' },
    { id: 51, card: 'Queen of Clubs', value: 12, suit: 'Clubs' },
    { id: 52, card: 'King of Clubs', value: 13, suit: 'Clubs' },
  ],
  loading: true,
  error: {},
}

export default function (state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case NEW_GAME:
      return {
        ...state,
        assessments: payload,
        loading: false,
      }
    default:
      return state
  }
}
