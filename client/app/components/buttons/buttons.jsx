import React from 'react';
import styles from './buttons.scss';
import Button from '../button';
import { Row, Column } from '../grid';

const Buttons = ({ languages }) => (
  <div className={styles.buttons}>
    <Row>
      {languages.map(item => (
        <Column key={item.id} >
          <Button
          // language={item.language}
           />
        </Column>
      ))}
    </Row>
  </div>
);

export default Buttons;
