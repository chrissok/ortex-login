import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {styles} from './ResetPasswordModal.style'

export default function ResetPasswordModal({ showModal, handleCloseModal }) {
    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Account Recovery</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please enter your account Email, we will send a link to reset your password</Modal.Body>
            <div className={styles.formContainer}>
                <Form>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                </Form>
            </div>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
          </Button>
                <Button variant="primary" onClick={handleCloseModal}>
                    Send
          </Button>
            </Modal.Footer>
        </Modal>
    )
}
