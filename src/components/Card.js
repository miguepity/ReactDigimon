import React, { Component } from 'react';
import Modal from '../components/Modal';

class Card extends Component {
    constructor() {
        super();
        this.state = {
            show: false
        }
    }
    showModal = () => {
        console.log('entra')
        this.setState({ show: true });
    }
    hideModal = () => {
        console.log('closed')
        this.setState({ show: false });
    }
    render() {
        return (
            <div className='tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5' >
                <img src={`${this.props.photo}`} alt='_digiPhoto_' onClick={this.showModal} />
                <div>
                    <h2>{this.props.name}</h2>
                    <p>{this.props.level}</p>
                </div>
                <Modal show={this.state.show} handleClose={this.hideModal} img={this.props.photo} />
            </div>
        );
    }
}

export default Card;