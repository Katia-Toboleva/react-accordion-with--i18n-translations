import React, {useState} from 'react';
import styles from './accordion.scss';
import AccordionHeader from './subcomponents/accordion-header';
import AccordionBody from './subcomponents/accordion-body';

const Accordion = ({ sections }) => {
  const [selected, setSelected] = useState([]);

  const handleAccordionHeaderClick = (id) => {
    const sectionIndex = selected.findIndex(item => item === id);
    let newSeletedSections = [];

    if (sectionIndex !== -1) {
      selected.splice(sectionIndex, 1);
      newSeletedSections = [...selected];
    } else {
      newSeletedSections = [
        ...selected,
        id,
      ];
    }

    setSelected(newSeletedSections);
  }

  return (
    <div className={styles['accordion-container']}>
      <div className={styles.accordion}>
        {sections.map(section => {
          const isOpened = selected.includes(section.id)
          return (
          <div key={section.id}>
            <AccordionHeader
              id={section.id}
              title={section.title}
              onClick={handleAccordionHeaderClick}
              isOpened={isOpened}
            />
            <AccordionBody
              isOpened={isOpened}
              body={section.body}
            />
          </div>
        )})}
      </div>
    </div>
  )
};

export default Accordion;
