import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ active, language, flag, onClick }) => {
  const [ isHovered, setHovered ] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  const handleButtonClick = () => {
    onClick(language)
  }

  return (
    <div
      className={cx('button', {
        'button--active': active,
        'button--hovered': isHovered,
        [`button--${language}`]: language,
      })}
      style={{backgroundImage: `url(${flag})`}}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleButtonClick}
    />
  );
};

export default Button;
