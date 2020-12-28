import React from 'react';
import classnames from 'classnames/bind';
import * as icons from './icons';
import styles from './icon.scss';

const cx = classnames.bind(styles);

const Icon = ({ icon, theme, size, isOpened }) => (
  <div
    className={cx('icon', {
      [`icon--theme-${theme}`]: theme,
      [`icon--size-${size}`]: size,
      'icon--is-opened': isOpened,
    })}
  >
    <i dangerouslySetInnerHTML={{ __html: icons[icon] }} />
  </div>
);


export default Icon;
