import { Typography, AppBar, makeStyles } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    margin: '15px 50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',
    boxShadow: 'none',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <AppBar position='static' color='inherit' className={styles.appBar}>
        <Typography variant='h4' align='center'>
          Video Chat
        </Typography>
      </AppBar>
      <VideoPlayer />
      <Notifications>
        <Options />
      </Notifications>
    </div>
  );
};

export default App;
