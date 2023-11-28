import React, { useState } from "react";
import { Form, Button, Image, Select, Grid, Input } from "semantic-ui-react";
import crysta from "./assets/crysta.jpg";
import innova from "./assets/innova.jpg";
import sedan from "./assets/sedan.jpg";
import Header from "./Header";
import Footer from "./Footer";
import innovaOld from "./assets/innova_old.jpg";
import traveller from "./assets/traveller.jpg";
import bus from "./assets/bus.jpg";
import BookingForm from "./BookingForm";

import * as css from "./app2.css";

const homePage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: 1,
    contact: "",
    car: "",
  });

  const cars = [
    { key: "sedan", text: "Sedan", value: "sedan" },
    { key: "suv", text: "SUV", value: "suv" },
    // { key: "luxury", text: "Luxury", value: "luxury" },
  ];

  const [passengerCount, setPassengerCount] = useState(1);

  const handleSubmit = () => {
    // Send booking details to WhatsApp
    let message = `New booking: \nFrom: ${bookingDetails.from}\nTo: ${bookingDetails.to}\nDate: ${bookingDetails.date}\nTime: ${bookingDetails.time}\nPassengers: ${bookingDetails.passengers}\nContact: ${bookingDetails.contact}\nCar: ${bookingDetails.car}`;

    // Open WhatsApp and prefill message
    let url = `https://wa.me/+919934721423?text=${encodeURIComponent(message)}`;
    window.open(url);
  };

  const handleImageClick = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div>
      <Header />
      <div className="container" onClick={handleImageClick}>
        <div className="left">
          <img src={crysta} className="car-image" />
        </div>
        <div>
          <img className="car-image " src={sedan} />
        </div>

        <div className="right">
          <img className="car-image right-image" src={innova} />
        </div>
        <div className="right">
          <img className="car-image right-image" src={innovaOld} />
        </div>
        <div className="right">
          <img className="car-image right-image" src={traveller} />
        </div>
        <div className="right">
          <img className="car-image right-image" src={bus} />
        </div>
      </div>
      <div className="container">
        <BookingForm />
        <Footer />
      </div>
    </div>
  );
};

export default homePage;
