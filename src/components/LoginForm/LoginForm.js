import React, { useState } from 'react';
import { styles } from './LoginForm.style';
import axios from 'axios';
import ResetPasswordModal from '../ResetPasswordModal/ResetPasswordModal';

export default function LoginForm() {

    const [isBlank, setIsBlank] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function areCreadentialsBlank(username, password) {
        return username === "" || password === ""

    }

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;

        if (areCreadentialsBlank(username, password)) {
            setIsBlank(true)

        } else {
            setIsBlank(false)

            const userCredentials = {
                username,
                password
            }

            axios.post('/login', {
                userCredentials
            })
        }
    }

    return (<>
        <div className={styles.container}>
            <div className={styles.title}>
                ORTEX
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    {isBlank && <div className={styles.invalidCredentials}>Please enter valid username and password</div>}
                </div>
                <div className={styles.inputContainer}>
                    <input className={styles.input} type="text" placeholder="Enter Username" name="username"></input>
                    <input className={styles.input} type="password" placeholder="Enter Password" name="password"></input>
                </div>
                <input className={styles.submit} type='submit' value='LOG IN'></input>
            </form>
            <div className={styles.footer} onClick={handleOpenModal}>¿Forgot your password?</div>
        </div>

        <ResetPasswordModal handleCloseModal={handleCloseModal} showModal={showModal} />
    </>
    )
}
