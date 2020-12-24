import React from 'react';
import sections from '../mocks/sections';
import styles from './faq.scss';

import Title from '../title';
import Accordion from '../accordion';

const Faq = () => (
  <div className={styles.faq}>
    <Title />
    {/* <Buttons /> */}
    <Accordion sections={sections} />
  </div>

);

export default Faq;
