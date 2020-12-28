import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import styles from './button.scss';

const cx = classnames.bind(styles);

const Button = ({ active, language, flag, onClick }) => {
  const [ isHovered, setHovered ] = useState(false);
  const { t, i18n } = useTranslation();

  const handleMouseEnter = () => {
    setHovered(true);
  }

  const handleMouseLeave = () => {
    setHovered(false);
  }

  const handleButtonClick = () => {
    onClick(language);
    i18n.changeLanguage(language);
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
