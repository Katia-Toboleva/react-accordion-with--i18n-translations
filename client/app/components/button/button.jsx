import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ language }) => {
  const [ active, setActive ] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  }

  const handleMouseLeave = () => {
    setActive(false);
  }

  return (
    <div
      className={cx('button', {
        'button--active': active,
        [`button--${language}`]: language,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Button;
