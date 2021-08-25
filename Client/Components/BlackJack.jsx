import React, {useState, useEffect} from 'react';
import Deck from '../Functions/Deck.js';
import randomNumber from '../Functions/RandomNumber.js';
var BlackJack = () => {
  var [dealer, updateDealer]= useState([]);
  var [player, updatePlayer]= useState([]);
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



  return (
    <div>
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
          </div>
        : <div>Player: </div>
      }
    </div>
  );
}

export default BlackJack;