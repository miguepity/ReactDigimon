import React, { useState } from 'react';
import Modal from '../components/Modal';

function Card({ name, level, photo }) {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    }

    const hideModal = () => {
        setShow(false);
    }

    return (
        <div className='tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5' >
            <Modal show={show} handleClose={hideModal} img={photo} />
            <img src={`${photo}`} alt='_digiPhoto_' onClick={showModal} />
            <div>
                <h2>{name}</h2>
                <p>{level}</p>
            </div>
        </div>
    );
}

export default Card;