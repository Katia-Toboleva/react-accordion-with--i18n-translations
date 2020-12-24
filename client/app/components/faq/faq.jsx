import React from 'react';
import sections from '../mocks/sections';
import languages from '../mocks/languages'
import styles from './faq.scss';

import Title from '../title';
import Buttons from '../buttons';
import Accordion from '../accordion';

const Faq = () => (
  <div className={styles.faq}>
    <Title />
    <Buttons languages={languages} />
    <Accordion sections={sections} />
  </div>

);

export default Faq;
