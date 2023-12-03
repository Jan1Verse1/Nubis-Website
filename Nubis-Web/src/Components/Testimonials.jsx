import React from "react";
import TestimonialC from "../components/TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./Testimonials.css";

const Testimonials = () => {
  const TestimonialsCards = [
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Jacob Adele",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Musa Adamu",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Sharon Uche",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Sumbo Odeku",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Liafian Kim",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Aladelola Goerge",
      location: "Lagos",
    },
    {
      Quote: <FontAwesomeIcon icon={faQuoteLeft} className="Quote" />,
      Testimonial:
        "Using Nubis for my deliveries has been one of the best experiences I got this past few months. I wonder what I would do without the awesome services they render..",
      Name: "Adekunle Uche",
      location: "Lagos",
    },
  ];

  return (
    <div className="theTestimonials">
      <div className="TestimonialsHeadTexts">
        <h2 className="TestimonialsHeader">
          What Our <span>Customers </span> Said about us
        </h2>
        <p className="TestimonialsHeadP">
          These are the experiences of real people with BucksTrybe. You can be
          one of them too.
        </p>
      </div>
      <div className="Testimonialscard">
        {TestimonialsCards.map(
          ({ Quote, Testimonial, Name, location }, index) => (
            <TestimonialC
              key={Name}
              Quote={Quote}
              Testimonial={Testimonial}
              Name={Name}
              location={location}
              style={{ animationDelay: `${index * 2}s` }} // Delay each testimonial animation
            />
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
