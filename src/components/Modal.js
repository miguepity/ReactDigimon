import React from 'react';
import './Modal.css'

const Modal = ({ handleClose, show, img }) => {
    const showHidenClass = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHidenClass}>
            <section className='modal-main'>
                <img src={`${img}`} alt='_digiPhoto_' />
                <button onClick={handleClose}>X</button>
            </section>
        </div>
    );
}

export default Modal;