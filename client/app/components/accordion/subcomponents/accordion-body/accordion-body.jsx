import React from 'react';
import styles from './accordion-body.scss';

const AccordionBody = ({ isOpened, body }) => (
  <div className={styles['accordion-body']}>
    { isOpened && (
      <div className={styles['accordion-body__content']}>
        {body}
      </div>
    )}
  </div>
)

export default AccordionBody;
