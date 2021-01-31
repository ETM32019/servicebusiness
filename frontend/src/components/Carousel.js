import React from "react";

const Carousel = ({ spacing }) => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${spacing}`}
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="http://placehold.it/700x400"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-left">
            <h1 className="text-warning">Building right</h1>
            <h4 className="text-white">Always dedicated and devoted</h4>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button className="btn btn-warning">Get a quote</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="http://placehold.it/700x400"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-left">
            <h1 className="text-warning">Your dream</h1>
            <h4 className="text-white">Is our responsibility</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="btn btn-warning">Checkout Our Services</button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="http://placehold.it/700x400"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-left">
            <h1 className="text-warning">Your Revovation</h1>
            <h4 className="text-white">Making dreams come to life</h4>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="btn btn-warning">Contact Us</button>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
