import React, { useState } from 'react';
import Modal from 'react-modal';
import {auth} from '../../../functions/firebaseAuth';
import '../notificationsWindows.scss'
import SingIn from '../../../pages/SingIn';

const Welcome = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const customStyles = {
        content: {
            top: '20%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            width: '600px',
            transform: 'translate(-40%, -10%)',
            padding: '0',
        },
    };

    return (
        <div id="root">
            {SingIn(setModalIsOpen)}
            <Modal isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}>
                <header className='headerNotificationWindows' id='headerNotificationWindows'></header>
                <div className='bodyNotificationWindows' id='bodyNotificationWindows'>
                    <h1 className='h1NotificationWindows' id='h1NotificationWindows'>¡Bienvenido {auth.currentUser.displayName}! </h1>
                    <p className='pNotificationWindows' id='pNotificationWindows'>"Estamos felices de tenerte como un nuevo integrante, esperamos que podamos aprender de tus aportes"</p>
                </div>
                <div className='imageNotificationWindows' id='imageNotificationWindows'>
                    <img src="https://www.sofka.com.co/wp-content/uploads/2020/08/sofka-logo-gradient-white.png" alt="logo-sofka"></img>
                </div>
                <footer className='footerNotificationWindows' id='footerNotificationWindows'></footer>
            </Modal>
        </div>
    )
}

export default Welcome;



