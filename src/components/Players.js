import React, { useContext, useState, Suspense, lazy } from 'react';
import { Store } from '../store/Store';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactPlayer from 'react-player';
const PlayerCard = lazy(() => import('./PlayerCard'));

const URL = 'https://www.youtube.com/watch?v';
const Players = () => {
  const [player, setPlayer] = useState({});
  const [open, setOpen] = useState(false);

  const {
    state: { videos }
  } = useContext(Store);

  const openModal = video => {
    setPlayer(video);
    setOpen(true);
  };

  return (
    <>
      <Suspense fallback="loading...">
        <div style={{ padding: '30px' }} className="row">
          {videos.map((player, index) => (
            <div
              key={index}
              className="col-md-4"
              style={{ marginBottom: '14px' }}
            >
              <PlayerCard openModal={openModal} {...player} />
            </div>
          ))}
        </div>
      </Suspense>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{player.title}</DialogTitle>
        <DialogContent>
          <center>
            <ReactPlayer
              url={`${URL}=${player.videoId}`}
              playing
              width="500px"
              height="300px"
            />
          </center>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            color="secondary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Players;
