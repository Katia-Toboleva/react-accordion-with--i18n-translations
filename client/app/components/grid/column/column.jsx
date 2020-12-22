import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import styles from './column.scss';

const cx = classnames.bind(styles);

const Column = ({ children, grow, shrink }) => (
    <div className={cx('grid-item', {
      'grid-item--grow': grow,
      'grid-item--shrink': shrink,
    })}>
      {children}
    </div>
  );

Column.propTypes = {
  children: PropTypes.node,
  grow: PropTypes.bool,
  shrink: PropTypes.bool,
};

export default Column;
