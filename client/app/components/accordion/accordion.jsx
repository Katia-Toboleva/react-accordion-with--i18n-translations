import React, {useState} from 'react';
import styles from './accordion.scss';
import AccordionHeader from './subcomponents/accordion-header';
import AccordionBody from './subcomponents/accordion-body';
import { useTranslation } from 'react-i18next';

const Accordion = ({ sections }) => {
  const [selected, setSelected] = useState([]);
  const { t } = useTranslation();

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
        {sections.map((section, index) => {
          const isOpened = selected.includes(section.id)
          return (
          <div key={section.id}>
            <AccordionHeader
              id={section.id}
              title={t(`main.sections.${index}.title`)}
              onClick={handleAccordionHeaderClick}
              isOpened={isOpened}
            />
            <AccordionBody
              isOpened={isOpened}
              body={t(`main.sections.${index}.body`)}
            />
          </div>
        )})}
      </div>
    </div>
  )
};

export default Accordion;
