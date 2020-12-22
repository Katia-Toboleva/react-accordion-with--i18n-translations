import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './button.scss';
import { Row, Column } from '../grid';
import Icon from '../icon';

const cx = classnames.bind(styles);

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  handleMouseEnter() {
    const { active } = this.state;

    this.setState({
      active: !active,
    });
  }

  handleMouseLeave() {
    const { active } = this.state;

    this.setState({
      active: !active,
    });
  }

  render() {
    const {
      text, theme, icon,
    } = this.props;

    const { active } = this.state;

    return (
      <div
        className={cx('button', {
          'button--active': active,
          [`button--${theme}`]: theme,
        })}
        onMouseEnter={() => { this.handleMouseEnter(); }}
        onMouseLeave={() => { this.handleMouseLeave(); }}
      >
        <Row>
          <Column>
            <div className={styles.button__icon}>
              <Icon
                icon={icon}
                theme={active
                  ? 'bright'
                  : 'brick'}
              />
            </div>
          </Column>

          <Column>
            <div className={styles.button__text}>
              <span>
                {text}
              </span>
            </div>
          </Column>
        </Row>
      </div>
    );
  }
}


Button.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
};

export default Button;
