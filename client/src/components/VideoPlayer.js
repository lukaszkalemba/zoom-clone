import { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
    [theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid cyan',
    margin: '10px',
  },
}));

const VideoPlayer = () => {
  const {
    name,
    callAccepted,
    callEnded,
    stream,
    call,
    myVideoRef,
    guestVideoRef,
  } = useContext(SocketContext);
  const styles = useStyles();

  return (
    <Grid container className={styles.gridContainer}>
      {stream && (
        <Paper className={styles.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
              {name || 'User'}
            </Typography>
            <video
              ref={myVideoRef}
              playsInline
              muted
              autoPlay
              className={styles.video}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper className={styles.paper}>
          <Grid item xs={12} md={6}>
            <Typography variant='h5' gutterBottom>
              {call.name || 'Guest'}
            </Typography>
            <video
              ref={guestVideoRef}
              playsInline
              autoPlay
              className={styles.video}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
