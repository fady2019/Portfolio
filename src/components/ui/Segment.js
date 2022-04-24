import React, { useEffect, useState } from 'react';
import classes from './Segment.module.css';

const SegmentButton = (props) => {
  const segmentBtnClasses = `
    ${props.className} 
    ${classes['segment-button']}
    ${props.active && classes.active}
`;

  const changeValueHandler = () => {
    props.onChange(props.val);
  };

  return (
    <button
      className={segmentBtnClasses}
      val={props.val}
      onClick={changeValueHandler}
    >
      {props.children}
    </button>
  );
};

const Segment = (props) => {
  const segmentClasses = `${props.className} ${classes.segment}`;

  const [active, setActive] = useState({ id: null, position: null });

  const { buttons, default: defButton } = props;

  useEffect(() => {
    if (defButton) {
      setActive({
        id: defButton,
        position: buttons.findIndex((btn) => btn.id === defButton),
      });
    }
  }, [buttons, defButton]);

  const changeHandler = (pos, id) => {
    setActive({
      id,
      position: pos,
    });
    props.onChange(id);
  };

  return (
    <div
      className={segmentClasses}
      style={{
        '--btns-length': buttons.length || 1,
        '--active-btn-pos': active.position,
      }}
    >
      {buttons.map((btn, idx) => (
        <SegmentButton
          key={btn.id}
          val={btn.id}
          active={btn.id === active.id}
          onChange={changeHandler.bind(null, idx)}
        >
          {btn.val}
        </SegmentButton>
      ))}
    </div>
  );
};

export default React.memo(Segment);
