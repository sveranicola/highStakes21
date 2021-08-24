import React, {useState, useEffect} from 'react';
import Deck from '../Functions/Deck.js'

var BlackJack = () => {
  var [dealer, updateDealer]= useState([]);
  var [player, updatePlayer]= useState([]);
  var [deck, updateDeck] = useState([])

  updateDeck = Deck();
  // console.log(newDeck);
  var deal = (deck) => {

  }

  return (
    <div>
      <div>
        <button onClick={deal} className="PlayButton">Play</button>
      </div>
      {deck?
          <div>
            Dealer:
            {dealer.map((card)=> {
              <span>{card}</span>
            })}
          </div>
        : <div>Dealer: </div>
      }
      {player ?
          <div>
            Player:
            {player.map((card)=> {
              <span>{card}</span>
            })}
          </div>
        : <div>Player: </div>
      }


    </div>
  );
}

export default BlackJack;