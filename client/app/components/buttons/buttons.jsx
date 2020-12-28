import React, { useState } from 'react';
import styles from './buttons.scss';
import Button from '../button';
import { Row, Column } from '../grid';

const Buttons = ({ languages }) => {
  const [currentLang, setCurrentLang] = useState('en')

  const handleLanguageButtonClick = (language) => {
    setCurrentLang(language)
  }

  return (
  <div className={styles.buttons}>
    <Row gutters="small">
      {languages.map(item => (
        <Column key={item.id} >
          <Button
            language={item.language}
            flag={item.image}
            active={item.language === currentLang}
            onClick={handleLanguageButtonClick}
          />
        </Column>
      ))}
    </Row>
  </div>
)};

export default Buttons;
