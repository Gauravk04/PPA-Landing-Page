
import React from "react";
import Container from "react-bootstrap/Container";
import StatCard from "../components/StatCard";

const StatContent = [
  {
    title: "Members",
    value: 2245,
    imgUrl: "/Stats/icon1.svg",
  },
  {
    title: "Clubs",
    value: 4632,
    imgUrl: "/Stats/icon2.svg",
  },
  {
    title: "Event Bookings",
    value: 8267,
    imgUrl: "/Stats/icon3.svg",
  },
  {
    title: "Payments",
    value: 4360,
    imgUrl: "/Stats/icon4.svg",
  },
];

const BusinessStats = () => {
  return (
    <Container className="d-flex flex-lg-row flex-column justify-content-lg-between justify-content-start align-items-lg-center px-5 py-5 bg-silver">
      <div className="font-inter" data-aos="fade-right">
        <h1 className="text-gray-900 fw-semibold">
          Helping a local&nbsp; <br />
          <span className="text-primary">business reinvent itself</span>
        </h1>
        <p className="navtext fw-normal">
          We reached here with our hard work and dedication.
        </p>
      </div>
      <div className="grid-container">
        {StatContent.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>
    </Container>
  );
};

export default BusinessStats;
