import React, { useContext } from 'react';
import { Store } from './Store';
import PlayerCard from './PlayerCard';

const Players = () => {
  const {
    state: { players }
  } = useContext(Store);

  return (
    <>
      <div style={{ padding: '30px' }}>
        <div className="row">
          {players.map((player, index) => (
            <div
              key={index}
              className="col-md-3"
              style={{ marginBottom: '14px' }}
            >
              <PlayerCard {...player} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Players;
