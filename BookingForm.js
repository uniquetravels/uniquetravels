// BookingForm.js

import { useState } from "react";
import {
  StyledForm,
  StyledField,
  StyledButton,
  StyledHeader,
  Logo,
  HeaderTitle,
} from "./StyledComponents";

function BookingForm() {
  const [booking, setBooking] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: 1,
    contact: "",
    car: "sedan",
  });

  const cars = [
    { key: "sedan", text: "Sedan", value: "sedan" },
    { key: "suv", text: "SUV", value: "suv" },
    { key: "traveller", text: "Traveller", value: "traveller" },
    { key: "bus", text: "Bus", value: "bus" },
    // { key: "luxury", text: "Luxury", value: "luxury" },
  ];

  const [errors, setErrors] = useState({});

  const validateRequired = (value) => {
    return value ? true : false;
  };

  const validateEmail = (email) => {
    // regex email validate
    const re = /\S+@\S+\.\S+/;
    return re.test(email) ? true : false;
  };

  const validatePhone = (phone) => {
    // regex phone validate
    const re = /^\d{10}$/;
    return re.test(phone) ? true : false;
  };

  const validate = () => {
    let errors = {};

    if (!validateRequired(booking.from)) errors.from = "*";

    if (!validateRequired(booking.to)) errors.to = "*";

    if (!validateRequired(booking.date)) errors.date = "*";

    if (!validateRequired(booking.time)) errors.time = "*";

    // if (!validateRequired(booking.passengers)) errors.passengers = "*";

    if (!validatePhone(booking.contact)) errors.contact = "Invalid contact";

    // if (!validateEmail(booking.email)) errors.email = "Invalid email";

    // setErrors(errors);
    setErrors((prev) => ({ ...prev, ...errors }));
    // console.log(errors, Object.keys(errors).length === 0);
    // return 1;
    return Object.keys(errors).length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("inside");
      return;
    }
    // Send booking details to WhatsApp
    let message = `Hi Aniket, New Enquiry for cab: \nFrom: ${booking.from}\nTo: ${booking.to}\nDate: ${booking.date}\nTime: ${booking.time}\nPassengers: ${booking.passengers}\nContact: ${booking.contact}\nCar: ${booking.car} \n Please reach out to me for any more details, looking forward to hear from you`;

    // Open WhatsApp and prefill message
    let url = `https://wa.me/+919049183232?text=${encodeURIComponent(message)}`;
    window.open(url);
  };

  return (
    <StyledForm onSubmit={handleSubmit} className="booking-form">
      <h4> Please fill out the below form for booking enquiry</h4>
      <StyledField>
        <label>From</label>
        <input
          value={booking.from}
          onChange={(e) => setBooking({ ...booking, from: e.target.value })}
        />
        {errors.from && <span key="from-error">{errors.from}</span>}
      </StyledField>

      <StyledField>
        <label>To</label>
        <input
          value={booking.to}
          onChange={(e) => setBooking({ ...booking, to: e.target.value })}
        />
        {errors.to && <span key="from-to">{errors.to}</span>}
      </StyledField>
      <StyledField>
        <label>Date</label>
        <input
          type="date"
          value={booking.date}
          onChange={(e) => setBooking({ ...booking, date: e.target.value })}
        />
        {errors.date && <span key="from-date">{errors.date}</span>}
      </StyledField>
      <StyledField>
        <label>Time</label>
        <input
          type="time"
          value={booking.time}
          onChange={(e) => setBooking({ ...booking, time: e.target.value })}
        />
        {errors.time && <span key="from-time">{errors.time}</span>}
      </StyledField>
      <StyledField>
        <label>Passengers</label>
        <input
          type="number"
          value={booking.passengers}
          onChange={(e) =>
            setBooking({ ...booking, passengers: e.target.value })
          }
        />
        {errors.passengers && (
          <span key="from-passengers">{errors.passengers}</span>
        )}
      </StyledField>
      <StyledField>
        <label>Contact</label>
        <input
          type="number"
          maxLength={10}
          value={booking.contact}
          onChange={(e) => setBooking({ ...booking, contact: e.target.value })}
        />
        {errors.contact && <span key="from-contact">{errors.contact}</span>}
      </StyledField>
      <StyledField>
        <label>Car</label>
        <select
          value={booking.car}
          onChange={(e) => setBooking({ ...booking, car: e.target.value })}
        >
          {cars.map((c) => (
            <option key={c.value} value={c.value}>
              {c.text}
            </option>
          ))}
        </select>
      </StyledField>
      <StyledButton type="submit">Enquire now</StyledButton>
    </StyledForm>
  );
}

export default BookingForm;
