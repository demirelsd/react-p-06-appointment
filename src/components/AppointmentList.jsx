import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { CgCloseO } from "react-icons/cg";

const AppointmentList = ({ appointments, setAppointments }) => {
  const handleDblClick = (id) => {
    setAppointments(
      appointments.map((appointment) => {
        return appointment.id !== id
          ? appointment
          : { ...appointment, consulted: !appointment.consulted };
      })
    );

    // const filteredAppointments = appointments.filter((appointment) => appointment.id !== item.id)
    // setAppointments([
    //   ...filteredAppointments,
    //   {
    //     ...item,
    //     consulted: !item.consulted,
    //   },
    // ]);
  };
  const handleDelete = (id) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };
  return (
    <Container className="mt-3 ">
      <h1 className="text-warning text-center">Appointment List</h1>
      {/* !appointments.length && ( <img src="./img/appointment.jpg"   alt="appointment image" className="  w-100 "/>) */}
      {appointments.length > 0 ? (
        appointments.map((item) => {
          const { id, patient, day, doctor, consulted } = item;
          return (
            <Row
              key={id}
              className={` justify-content-center align-items-center g-3 border border-dark-subtle mt-2 bg-success p-2 text-dark ${
                consulted ? "bg-opacity-10" : "bg-opacity-50"
              }  `}
              onDoubleClick={() => handleDblClick(id)}
            >
              <Col
                xs={12}
                sm={12}
                md={6}
                className={consulted && "text-decoration-line-through"}
              >
                <h3> {patient}</h3>
                <h3 className="text-warning"> {doctor}</h3>
              </Col>
              <Col
                xs={10}
                sm={8}
                md={5}
                className={consulted && "text-decoration-line-through"}
              >
                <p>Date: {new Date(day).toLocaleDateString()}</p>
                <p>Time : {new Date(day).toLocaleTimeString()}</p>
              </Col>
              <Col
                xs={2}
                sm={4}
                md={1}
                className="align-self-start display-5 text-danger"
                onClick={() => handleDelete(id)}
              >
                <CgCloseO />
              </Col>
            </Row>
          );
        })
      ) : (
        <img
          src="./img/appointment.jpg"
          // src="https://cdn.pixabay.com/photo/2020/08/03/09/43/medical-5459650__340.png"
          alt="appointment image"
          className="  w-100 "
        />
      )}
    </Container>
  );
};
export default AppointmentList;
