import React from "react";
import BookingCard from "../BookingCard/BookingCard";
const BookingData = [
  {
    id: 1,
    subjects: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 2,
    subjects: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 3,
    subjects: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 4,
    subjects: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 5,
    subjects: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
  {
    id: 6,
    subjects: "Teeth Orthodontics",
    visitingHour: "8:00 AM - 9:00 AM",
    totalSpace: 10,
  },
];

const BookAppointment = ({ date }) => {
  return (
    <div>
      <section>
        <h2 style={{ color: "#1cc7c1" }} className="text-center">
          Available Appointment On {date.toDateString()}{" "}
        </h2>
        <div className="row mt-5">
          {BookingData.map((booking) => (
            <BookingCard date={date} booking={booking}></BookingCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BookAppointment;
