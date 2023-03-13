import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AppointmentModal = ({
  show,
  setShow,
  setAppointments,
  appointments,
  doctorName,
}) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleClose = () => setShow(false);
  // console.log(appointments)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
        id: appointments.length + 1,
        patient: name,
        day: date,
        consulted: false,
        doctor:doctorName
    }
    setAppointments([
      ...appointments, newAppointment ]);
    handleClose();
   
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {doctorName} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name and surname"
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="datetime">
              <Form.Label>Day & Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer >
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AppointmentModal;
