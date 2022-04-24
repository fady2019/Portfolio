import classes from './Progress.module.css';
import Transition from 'react-transition-group/Transition';

const Progress = (props) => {
  return (
    <div className={`${props.className} ${classes.progress}`}>
      <Transition in={true} timeout={300} appear={true}>
        {(state) => {
          return (
            <div
              className={classes['progress-bar']}
              style={{
                width: state === 'entered' ? `${props.barValue}%` : '0%',
              }}
            ></div>
          );
        }}
      </Transition>
    </div>
  );
};

export default Progress;
