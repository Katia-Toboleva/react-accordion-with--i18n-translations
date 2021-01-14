import React, {useState, useEffect, useRef } from 'react';
import classnames from 'classnames/bind';
import styles from './accordion-body.scss';
import Text from '../../../text';

const cx = classnames.bind(styles);

const getBodyStyle = (height, isOpened) => isOpened ? {height: `${height}px`} : {height: '0px'};

const AccordionBody = ({ isOpened, body }) => {
  const [height, setHeight] = useState(0);
  const refBody = useRef();

  useEffect(() => {
    setHeight(refBody.current.offsetHeight)
  })

  return (
  <div className={cx('accordion-body', {
    'accordion-body--active': isOpened,
  })}
    style={getBodyStyle(height, isOpened)}
  >
    <div ref={refBody} className={styles['accordion-body__content']}>
      <Text size="small" weight="regular" translation={body} />
    </div>
  </div>
)}

export default AccordionBody;
