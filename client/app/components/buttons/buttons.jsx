import React from 'react';
import styles from './buttons.scss';
import Button from '../button';
import { Row, Column } from '../grid';

const Buttons = ({ languages }) => (
  <div className={styles.buttons}>
    <Row gutters="small">
      {languages.map(item => (
        <Column key={item.id} >
          <Button language={item.language} flag={item.image} />
        </Column>
      ))}
    </Row>
  </div>
);

export default Buttons;
