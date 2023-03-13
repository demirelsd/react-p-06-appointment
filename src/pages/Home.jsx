import Doctors from "../components/Doctors";
import AppointmentList from "../components/AppointmentList";
import { appointmentData, doctorData } from "../helper/data";

import { Container } from "react-bootstrap";
import { useState } from "react";

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  const [doctors, setDoctors] = useState(doctorData);

 

  return (
    <Container>
      <h1 className="text-center text-danger display-6">WORLD HOSPITAL</h1>
      <h1 className="text-center text-primary">Our Doctors</h1>
      <Doctors doctors={doctors} appointments={appointments} setAppointments = {setAppointments} />
      <AppointmentList appointments={appointments} setAppointments = {setAppointments} />
    </Container>
  );
};
export default Home;
