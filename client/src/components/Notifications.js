import { useContext } from 'react';
import { Button } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

const Notifications = ({ children }) => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <div style={{ marginTop: '15px' }}>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1 style={{ marginRight: '15px' }}>{call.name} is calling:</h1>
          <Button variant='contained' color='primary' onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
      {children}
    </div>
  );
};

export default Notifications;
