import React from 'react';
import defaultContent from '../../translations/locales/en-GB';
import languages from '../mocks/languages'
import styles from './faq.scss';

import { Row, Column } from '../grid';
import Title from '../title';
import Buttons from '../buttons';
import Accordion from '../accordion';

const Faq = () => (
  <div className={styles.faq}>
    <Row alignCenter>
      <Column grow>
        <Title />
      </Column>
      <Column shrink>
        <Buttons languages={languages} />
      </Column>
    </Row>
    <Accordion sections={defaultContent.main.sections} />
  </div>

);

export default Faq;
