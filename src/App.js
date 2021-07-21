import React, {useState} from 'react';
import Todo from '../src/components/Todo';

import { I18nProvider, LOCALES } from './i18n';


import translate from './i18n/translate';


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
	return (
		<I18nProvider locale={locale}>
			<div>
				{translate('hello')}
				<h1>{translate('todo')}</h1>
				<Todo text="Learn react" />
			</div>
			<button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
			<button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
			<button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
		</I18nProvider>
	);
}

export default App;


// <Todo text='Learn react'/> -> text is used as props.text in Todo.js