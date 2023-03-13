import { useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import AppointmentModal from "./AppointmentModal";

const Doctors = ({doctors,setAppointments, appointments}) => {
  const [show, setShow] = useState(false);
  const [doctorName, setDoctorName] = useState('')
  
    const handleShow = (name) => { 
    setShow(true)
    setDoctorName(name)
  }
  return (
    <Container className=" text-center">
      <Row className="g-4 justify-content-center ">
        {doctors.map(({ id, dep, img, name }) => (
          <Col key={ id } md={ 3 } sm={ 4 } xs={ 6 } onClick={ ()=>handleShow(name) } >
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{dep}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <AppointmentModal
        show={show}
        setShow={setShow}
        appointments={appointments}
        setAppointments={ setAppointments }
        doctorName = {doctorName}
      />
    </Container>
  );
};
export default Doctors;
