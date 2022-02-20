import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import CloudIcon from '@material-ui/icons/Cloud';
const useStyles = makeStyles({
  uploading: {
    position: 'fixed',
    background: '#fff',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
    bottom: '0',
    zIndex: '9999',
  },
  cloud: { transform: 'scale(5)', color: '#D2D2D2' },
  arrow: { transform: 'scale(2,3) rotate(-90deg)', color: '#3f51b5' },
  image: {
    paddingTop: '100px',
  },
  pTop: { paddingTop: '50px' },
  block: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
  },
  p: { color: '#999', paddingTop: '20px', margin: 0 },
  bounce: {
    paddingTop: '100px',
    animation: `$bounce 2s infinite`,
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0)',
    },
    '20%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(0)',
    },
    '80%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-30px)',
    },
    '60%': {
      transform: 'translateY(-15px)',
    },
  },
});
const Spinner = (props) => {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.uploading}
        onMouseLeave={() => props.endDragFile()}
        onDragLeave={() => {
          props.endDragFile();
        }}
      >
        <div className={classes.block}>
          <div>
            <div className={classes.pTop}>
              <CloudIcon className={classes.cloud} />
            </div>
            <div className={`${classes.bounce} ${classes.pTop}`}>
              <TrendingFlatIcon className={classes.arrow} />
            </div>
            <p className={classes.p}>Drop files anywhere to upload</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Spinner;
