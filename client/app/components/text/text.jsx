import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import styles from './text.scss';

const cx = classnames.bind(styles);

const Text = ({
  translation,
  theme,
  size,
  weight,
  children,
  transform,
}) => {
  const { t } = useTranslation();
  const text = translation && t(translation);

  const extraProps = (text)
    ? { dangerouslySetInnerHTML: { __html: text } }
    : { children };

  return (
    <span
      className={cx('text', {
        [`text--${theme}`]: theme,
        [`text--size-${size}`]: size,
        [`text--weight-${weight}`]: weight,
        [`text--transform-${transform}`]: transform,
      })}
      {...extraProps}
    />
  );
};

Text.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
};

export default Text;
