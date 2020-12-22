import React from 'react';
import { I18nextProvider } from 'react-i18next';

import Accordion from './components/accordion';

import './reset.scss';
import i18n from './translations/config';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Accordion />
  </I18nextProvider>
);

export default App;
