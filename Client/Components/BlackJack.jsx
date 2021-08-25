import React, {useState, useEffect} from 'react';
import Deck from '../Functions/Deck.js';
import randomNumber from '../Functions/RandomNumber.js';
var BlackJack = () => {
  var [dealer, updateDealer]= useState([]);
  var [player, updatePlayer]= useState([]);
  var [dealerTotal, updateDealerTotal]= useState(0);
  var [playerTotal, updatePlayerTotal]= useState(0);
  var [clicked, updateClick]= useState(false);

  var deck = Deck();

  var deal = () => {
    updateClick(true);
    var house = [];
    var guest = [];

    while (guest.length < 2) {
      var num = randomNumber(0, deck.length);
      guest.push(deck[num]);
      deck.splice(num, 1);
    }
    updatePlayer(guest);

    while (house.length < 2) {
      randomNumber(0, deck.length);
      house.push(deck[num]);
      deck.splice(num, 1);
    }
    updateDealer(house);
  }

  var deckDenoms = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10
  }
  useEffect(()=> {
    var dealtot = 0;
    var playtot = 0;
    dealer.forEach((card)=> {
      var card = card.split('');
      card.splice(card.length -1, 1);
      card = card.join('');
      console.log(deckDenoms[card], card);
      dealtot += deckDenoms[card];
      updateDealerTotal(dealtot);
    });
    player.forEach((card)=> {
      var newTotal = playerTotal + parseInt(card[0])
      updatePlayerTotal(newTotal);
    });
  }, [dealer]);


  return (
    <div className="playingTable">
      <div>
        {clicked ? null : <button onClick={deal} className="PlayButton">Play</button>}
      </div>
      {dealer?
          <div>
            Dealer:
            {dealer.map((card, index)=> {
              return (
                <span key={index}>| {card} |</span>
              )
            })}
            <div>
              Total: {dealerTotal}
            </div>
          </div>
        : <div>Dealer: </div>
      }
      {player ?
          <div>
            Player:
            {player.map((card, index)=> {
              return (
                <span key={index}>| {card} |</span>
              )
            })}
            <div>
              Total: {playerTotal}
            </div>
          </div>
        : <div>Player: </div>
      }

      <div>
        {clicked ?
          <div>
            <button onClick={null} className="PlayButton">HIT</button>
            <button onClick={null } className="PlayButton">STAY</button>
          </div>
          : null}
      </div>
    </div>
  );
}

export default BlackJack;