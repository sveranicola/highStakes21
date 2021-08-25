import React, {useState, useEffect} from 'react';


var CoinFLip = () => {
  var [coin, updateCoin]= useState('');
  var [clicked, updateClick]= useState(false);


  var flip = () => {
    updateClick(true);
    var coinFlip = Math.random() < 0.5;

    if (coinFlip) {
      updateCoin('HEADS')
    } else {
      updateCoin('TAILS')
    }
  }

  useEffect(() => {

  });


  return (
    <div className="playingTable">
      <div>
        {clicked ? null : <button onClick={flip} className="PlayButton">Play</button>}
      </div>
      <div>
        Player: HEADS
      </div>
      <div>
        HOUSE: TAILS
      </div>
      <div>
        OUTCOME: {coin}
      </div>
      <h1>
        {}
      </h1>
    </div>
  );
}

export default CoinFLip;