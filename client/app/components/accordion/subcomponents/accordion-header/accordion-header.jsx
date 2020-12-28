import React from 'react';
import styles from './accordion-header.scss';
import Text from '../../../text';
import Icon from '../../../icon';

const AccordionHeader = ({ id, title, onClick, isOpened }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <div className={styles['accordion-header']} onClick={handleClick}>
      <Text size="medium" weight="medium">{title}</Text>
      <Icon icon="plus" isOpened={isOpened} size="small" theme="white" />
    </div>
  )
}

export default AccordionHeader;
