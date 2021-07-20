import React from 'react';
import TileCard from './TileCard';

const TileCardList = ({ tileCards, clickEvent }) => {
  return (
    <div>
      {
        tileCards.map((user, i) => {
          return (
            <TileCard
              key={i}
              tileName={tileCards[i].tileName}
              clickEvent={clickEvent}
              />
          );
        })
      }
    </div>
  );
}

export default TileCardList;