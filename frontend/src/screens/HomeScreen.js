import { Link } from "react-router-dom";
import Caroursel from "../components/Carousel";
import TestimonialCards from "../components/TestimonialCards";

const HomeScreen = () => {
  return (
    <>
      <section>
        <Caroursel />
      </section>
      {/* Service Section */}
      <section className="bg-light">
        <div className="container py-5">
          <header className="text-center mb-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <h2 className="text-uppercase">
                  <span className="text-warning">Our </span>
                  Services
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  bibendum nunc non felis sollicitudin, ut convallis ante
                  varius.
                </p>
              </div>
            </div>
          </header>
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider Section */}
      <section className="bg-dark py-5">
        <div className="container">
          <div className="row align-items-center text-white">
            <div className="col-lg-7 text-center text-lg-left mb-4 mb-lg-0">
              <h2>
                Trusted Contruction{" "}
                <span className="text-warning">Since 2020</span>
              </h2>
              <p className="text-small mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                bibendum nunc non felis sollicitudin, ut convallis ante varius.
                Donec quis placerat ipsum, id tincidunt orci.
              </p>
            </div>
            <div className="col-lg-5 text-center text-lg-right">
              <Link className="btn btn-outline-warning btn-lg">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Works Section */}
      <section className="bg-light">
        <div className="container py-5">
          <header className="text-center mb-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <h2 className="text-uppercase">
                  <span className="text-warning">Latest </span>
                  Works
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  bibendum nunc non felis sollicitudin, ut convallis ante
                  varius.
                </p>
              </div>
            </div>
          </header>
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-warning btn-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-warning btn-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <Link to="/" className="btn btn-warning btn-block">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
      <section className="py-5 bg-white">
        <div className="container-fluid py-5">
          <header className="text-center mb-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <h2 className="text-uppercase">
                  What
                  <span className="text-warning"> Our Clients </span>
                  Say
                </h2>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  bibendum nunc non felis sollicitudin, ut convallis ante
                  varius.
                </p>
              </div>
            </div>
          </header>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <TestimonialCards />
              </div>
              <div className="carousel-item">
                <TestimonialCards />
              </div>
              <div className="carousel-item">
                <TestimonialCards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
