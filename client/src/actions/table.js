import {
  NEW_GAME,
  SET_TABLE_LOADING,
  HANDLE_TRUMP_MESSAGE,
  SELECT_TRUMP,
  MAKE_THROW,
} from './types'

export const newGame = () => (dispatch) => {
  dispatch({
    type: SET_TABLE_LOADING,
  })

  // Initialize table variables
  let players = [
    { id: 1, name: 'Player 1', hand: [] },
    { id: 2, name: 'Player 2', hand: [] },
    { id: 3, name: 'Player 3', hand: [] },
    { id: 4, name: 'Player 4', hand: [] },
  ]
  let teams = [
    { id: 1, plucks: 0, tricks: 0, name: 'Team Red' },
    { id: 2, plucks: 0, tricks: 0, name: 'Team Blue' },
  ]
  let deck = [
    { id: 1, card: '2 of Spades', value: 2, suit: 'Spades', bg: '2S' },
    { id: 2, card: '3 of Spades', value: 3, suit: 'Spades', bg: '3S' },
    { id: 3, card: '4 of Spades', value: 4, suit: 'Spades', bg: '4S' },
    { id: 4, card: '5 of Spades', value: 5, suit: 'Spades', bg: '5S' },
    { id: 5, card: '6 of Spades', value: 6, suit: 'Spades', bg: '6S' },
    { id: 6, card: '7 of Spades', value: 7, suit: 'Spades', bg: '7S' },
    { id: 7, card: '8 of Spades', value: 8, suit: 'Spades', bg: '8S' },
    { id: 8, card: '9 of Spades', value: 9, suit: 'Spades', bg: '9S' },
    { id: 9, card: '10 of Spades', value: 10, suit: 'Spades', bg: '10S' },
    { id: 10, card: 'Jack of Spades', value: 11, suit: 'Spades', bg: 'JS' },
    { id: 11, card: 'Queen of Spades', value: 12, suit: 'Spades', bg: 'QS' },
    { id: 12, card: 'King of Spades', value: 13, suit: 'Spades', bg: 'KS' },
    { id: 13, card: 'Ace of Spades', value: 14, suit: 'Spades', bg: 'AS' },
    { id: 14, card: '2 of Hearts', value: 2, suit: 'Hearts', bg: '2H' },
    { id: 15, card: '3 of Hearts', value: 3, suit: 'Hearts', bg: '3H' },
    { id: 16, card: '4 of Hearts', value: 4, suit: 'Hearts', bg: '4H' },
    { id: 17, card: '5 of Hearts', value: 5, suit: 'Hearts', bg: '5H' },
    { id: 18, card: '6 of Hearts', value: 6, suit: 'Hearts', bg: '6H' },
    { id: 19, card: '7 of Hearts', value: 7, suit: 'Hearts', bg: '7H' },
    { id: 20, card: '8 of Hearts', value: 8, suit: 'Hearts', bg: '8H' },
    { id: 21, card: '9 of Hearts', value: 9, suit: 'Hearts', bg: '9H' },
    { id: 22, card: '10 of Hearts', value: 10, suit: 'Hearts', bg: '10H' },
    { id: 23, card: 'Jack of Hearts', value: 11, suit: 'Hearts', bg: 'JH' },
    { id: 24, card: 'Queen of Hearts', value: 12, suit: 'Hearts', bg: 'QH' },
    { id: 25, card: 'King of Hearts', value: 13, suit: 'Hearts', bg: 'KH' },
    { id: 26, card: 'Ace of Hearts', value: 14, suit: 'Hearts', bg: 'AH' },
    { id: 27, card: '2 of Clubs', value: 2, suit: 'Clubs', bg: '2C' },
    { id: 28, card: '3 of Clubs', value: 3, suit: 'Clubs', bg: '3C' },
    { id: 29, card: '4 of Clubs', value: 4, suit: 'Clubs', bg: '4C' },
    { id: 30, card: '5 of Clubs', value: 5, suit: 'Clubs', bg: '5C' },
    { id: 31, card: '6 of Clubs', value: 6, suit: 'Clubs', bg: '6C' },
    { id: 32, card: '7 of Clubs', value: 7, suit: 'Clubs', bg: '7C' },
    { id: 33, card: '8 of Clubs', value: 8, suit: 'Clubs', bg: '8C' },
    { id: 34, card: '9 of Clubs', value: 9, suit: 'Clubs', bg: '9C' },
    { id: 35, card: '10 of Clubs', value: 10, suit: 'Clubs', bg: '10C' },
    { id: 36, card: 'Jack of Clubs', value: 11, suit: 'Clubs', bg: 'JC' },
    {
      id: 37,
      card: 'Queen of Clubs',
      value: 12,
      suit: 'Clubs',
      bg: 'QC',
    },
    { id: 38, card: 'King of Clubs', value: 13, suit: 'Clubs', bg: 'KC' },
    { id: 39, card: 'Ace of Clubs', value: 14, suit: 'Clubs', bg: 'AC' },
    { id: 40, card: '2 of Diamonds', value: 2, suit: 'Diamonds', bg: '2D' },
    { id: 41, card: '3 of Diamonds', value: 3, suit: 'Diamonds', bg: '3D' },
    { id: 42, card: '4 of Diamonds', value: 4, suit: 'Diamonds', bg: '4D' },
    { id: 43, card: '5 of Diamonds', value: 5, suit: 'Diamonds', bg: '5D' },
    { id: 44, card: '6 of Diamonds', value: 6, suit: 'Diamonds', bg: '6D' },
    { id: 45, card: '7 of Diamonds', value: 7, suit: 'Diamonds', bg: '7D' },
    { id: 46, card: '8 of Diamonds', value: 8, suit: 'Diamonds', bg: '8D' },
    { id: 47, card: '9 of Diamonds', value: 9, suit: 'Diamonds', bg: '9D' },
    { id: 48, card: '10 of Diamonds', value: 10, suit: 'Diamonds', bg: '10D' },
    { id: 49, card: 'Jack of Diamonds', value: 11, suit: 'Diamonds', bg: 'JD' },
    {
      id: 50,
      card: 'Queen of Diamonds',
      value: 12,
      suit: 'Diamonds',
      bg: 'QD',
    },
    { id: 51, card: 'King of Diamonds', value: 13, suit: 'Diamonds', bg: 'KD' },
    { id: 52, card: 'Ace of Diamonds', value: 14, suit: 'Diamonds', bg: 'AD' },
  ]
  let throws = []
  let cardsleft = deck
  let dealer = undefined
  let popup = undefined
  let lead = undefined
  let trump = undefined
  let player_turn = undefined

  // Deal out cards
  deal(players, deck)

  // Select dealer
  players.map((one) => {
    one.hand.map((card) => {
      // Whoever receives the 2 of spades is the dealer
      if (card.id === 1) {
        dealer = one
        lead = one.id
        player_turn = one.id
        if (dealer.id == 1) {
          popup = 'mytrump'
        } else {
          // If the user does not have the 2 of clubs they must select the trump suit
          popup = 'opptrump'
          trump = computeTrump(players, dealer, trump)
        }
      }
      return card
    })
    return one
  })

  dispatch({
    type: NEW_GAME,
    payload: {
      players: players,
      teams: teams,
      dealer: dealer,
      popup: popup,
      trump: trump,
      player_turn: player_turn,
      cardsleft: cardsleft,
      lead: lead,
    },
  })
}

// User selects trump
export const selectTrump = (suit) => async (dispatch) => {
  dispatch({
    type: SELECT_TRUMP,
    payload: {
      trump: suit,
    },
  })
}

// Close the message that displays when an opponent is the dealer
export const handleTrumpMessage = () => async (dispatch) => {
  dispatch({
    type: HANDLE_TRUMP_MESSAGE,
  })
}

// Throws start once trump is selected
export const makeThrow = (players, dealer, teams, trump, popup, throws, cardsleft, player_turn, lead, selected) => async (dispatch
  
) => {
  // If it is a computer player's turn, make a throw
  if (player_turn !== 1 && throws.length < 4) {
    // Select player whose turn it is
    players.map(player=>{
      if (player.id === player_turn) {
        /////////////////
        // First Throw //
        /////////////////
        if (throws.length == 0) {
          let throwcard = undefined
          // If player has a winner that isn't the trump suit, throw it
          player.hand.map(card=>{
            if (cardsleft.filter(each=>each.value > card.value && each.suit == card.suit).length == 0 && card.suit !== trump) {
              throwcard = card       
              }
          })
          // If player does not have a winner, throw the lowest card in that suit
          let lowvalue = 100
          if (throwcard !== undefined) lowvalue = 0
          player.hand.map(card=>{
            if (card.value < lowvalue && card.suit !== trump) {
              throwcard = card
              lowvalue = card.value     
              }
          })
          // Add card to table (throws)
          throws.push(throwcard)
        }
        /////////////////////////
        // Second/Third Throw  //
        /////////////////////////
        else if (throws.length == 1 || throws.length == 2) {
          let throwcard = undefined
          // If player has a winner that is the same as the trump suit, throw it
          player.hand.map(card=>{
            if (cardsleft.filter(each=>each.value > card.value && each.suit == card.suit).length == 0 && card.suit === throws[0].suit) {
              throwcard = card       
              }
          })
          // If player does not have a winner, throw the lowest card in that suit
          let lowvalue = 100
          if (throwcard !== undefined) lowvalue = 0
          player.hand.map(card=>{
            if (card.value < lowvalue && card.suit === throws[0].suit) {
              throwcard = card
              lowvalue = card.value     
              }
          })
          // Add card to table (throws)
          throws.push(throwcard)
        }
        ////////////////
        // Last Throw //
        ////////////////
        else if (throws.length == 3) {
          let throwcard = undefined
          // If player has a winner that is the same as the trump suit, throw the lowest winner
          let currentvalue = undefined
          player.hand.map(card=>{
            if (cardsleft.filter(each=>each.value > card.value && each.suit == card.suit).length == 0 && card.suit === throws[0].suit && card.value < currentvalue) {
              throwcard = card   
              }
          })
          // If player does not have a winner, throw the lowest card in that suit
          let lowvalue = 100
          if (throwcard !== undefined) lowvalue = 0
          player.hand.map(card=>{
            if (card.value < lowvalue && card.suit === throws[0].suit) {
              throwcard = card
              lowvalue = card.value     
              }
          })
          // Add card to table (throws)
          throws.push(throwcard)
        }
      }
    })
    // User throw
  } else if (player_turn == 1 && selected !== undefined) {
    throws.push(selected)
    popup = undefined
  }

    // Change turn to next player
    player_turn = lead + throws.length
    if (player_turn === 5) player_turn = 1
    if (player_turn === 6) player_turn = 2
    if (player_turn === 7) player_turn = 3
  
    // All cards are thrown
    if (throws.length === 4) {
      // Remove cards from deck
      cardsleft = cardsleft.filter(cardleft=>cardleft.id !== throws[0].id && cardleft.id !== throws[1].id && cardleft.id !== throws[2].id && cardleft.id !== throws[3].id)
    }


  dispatch({
    type: MAKE_THROW,
    payload: {
      players: players,
      dealer: dealer,
      teams: teams,
      popup: popup,
      trump: trump,
      throws: throws,
      cardsleft: cardsleft,
      player_turn: player_turn,
      lead: lead,
    },
  })
}

////// //  // //   // ////// //////  // ////// //   // //////
//     //  // ///  // //       //    // //  // ///  // //
////// //  // // / // //       //    // //  // // / // //////
//     //  // //  /// //       //    // //  // //  ///     //
//     ////// //   // //////   //    // ////// //   // //////

// Deal cards
const deal = (players, deck) => {
  // Empty player hands
  players[0].hand = []
  players[1].hand = []
  players[2].hand = []
  players[3].hand = []

  // Deal card
  while (deck.length > 0) {
    // Deal card
    let card_delt = deck[(Math.random() * (deck.length - 1)).toFixed(0)]

    // Remove card from deck
    deck = deck.filter((card) => card.id !== card_delt.id)

    // Add to player hands
    if (players[0].hand.length < 13) {
      players[0].hand.push(card_delt)
    } else if (players[1].hand.length < 13) {
      players[1].hand.push(card_delt)
    } else if (players[2].hand.length < 13) {
      players[2].hand.push(card_delt)
    } else if (players[3].hand.length < 13) {
      players[3].hand.push(card_delt)
    }
  }
  // Sort user's hand
  players[0].hand = players[0].hand.sort(function (a, b) {
    return a.id - b.id
  })
}

// Trump suit is selected
const computeTrump = (players, dealer, trump) => {
  let hearts = 0
  let diamonds = 0
  let clubs = 0
  let spades = 0
  // Iterate through players to find dealer
  players.map((player) => {
    if (player.id === dealer.id) {
      // Look through dealer's hand and count amount of each suit and select highest for trump
      player.hand.map((card) => {
        if (card.suit === 'Hearts') {
          hearts += 1
        }
        if (card.suit === 'Diamonds') {
          diamonds += 1
        }
        if (card.suit === 'Clubs') {
          clubs += 1
        }
        if (card.suit === 'Spades') {
          spades += 1
        }
      })
      // Select Trump
      if (hearts >= diamonds && hearts >= clubs && hearts >= spades) {
        trump = 'Hearts'
      } else if (
        diamonds >= hearts &&
        diamonds >= clubs &&
        diamonds >= spades
      ) {
        trump = 'Diamonds'
      } else if (clubs >= hearts && clubs >= diamonds && clubs >= spades) {
        trump = 'Clubs'
      } else {
        trump = 'Spades'
      }
    }
    return player
  })
  return trump
}
