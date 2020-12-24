import React from 'react';
import { I18nextProvider } from 'react-i18next';

import Faq from './components/faq';

import './reset.scss';
import i18n from './translations/config';

const App = () => (
  <I18nextProvider i18n={i18n}>
    <Faq />
  </I18nextProvider>
);

export default App;
