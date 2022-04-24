import classes from './Loader.module.css';

const Loader = (props) => {
  return (
    <div className={`${props.className} ${classes['lds-ripple']}`}>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
