import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
//import { I18nProvider, LOCALES } from '../i18n';

import translate from '../i18n/translate';

function Todo(props) {
  const [ modalIsOpen, setModalIsOpen ] = useState(false); //initial state

  function deleteHandler() {
    setModalIsOpen(true) //new state
  }


  function closeModalHandler() {
		setModalIsOpen(false); //new state
	}

  return (
		<div className="card">
			<h2>{props.text}</h2>
			<div className="actions">
				<button className="btn" onClick={deleteHandler}>
					{translate('delete')}
				</button>
			</div>
			{modalIsOpen ? (
				<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
			) : null}
			{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
		</div>
	);
}
// { modalIsOpen ? <Modal /> : null}  is the same as { modalIsOpen && <Modal />}  
export default Todo; 

// onClick calls the function deleteHandler