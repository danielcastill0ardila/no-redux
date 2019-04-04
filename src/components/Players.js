import React, { useContext } from 'react';
import { Store } from '../store/Store';
import PlayerCard from './PlayerCard';

const Players = () => {
  const {
    state: { videos }
  } = useContext(Store);

  return (
    <>
      <div style={{ padding: '30px' }}>
        <div className="row">
          {videos.map((player, index) => (
            <div
              key={index}
              className="col-md-4"
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
