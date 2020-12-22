import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import * as icons from './svg';
import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = (props) => {
  const {
    icon, theme,
  } = props;

  const glyth = icons[icon];

  return (
    <i
      className={cx('icon', {
        [`icon--theme-${theme}`]: theme,
      })}
      dangerouslySetInnerHTML={{ __html: glyth }}
    />
  );
};


Icon.propTypes = {
  icon: PropTypes.string,
  theme: PropTypes.string,
};

export default Icon;
