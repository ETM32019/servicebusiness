import { Link } from "react-router-dom";

const ServicesScreen = () => {
  return (
    <>
      {/* Big Banner */}
      <section className="bg-dark text-white">
        <div className="container text-center py-5 ">
          <h1>Services</h1>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/400x300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Kitchen Remodeling</h5>
                  <p className="card-text">Factory, Industry</p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/400x300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Home Renovation</h5>
                  <p className="card-text">Factory, Industry</p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="http://placehold.it/400x300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Home Repair</h5>
                  <p className="card-text">Factory, Industry</p>
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
      {/* Services Section */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/400x300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Painting</h5>
                  <p className="card-text">Factory, Industry</p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <img
                  src="http://placehold.it/400x300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Windows & Doors</h5>
                  <p className="card-text">Factory, Industry</p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <img
                  src="http://placehold.it/400x300"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Bathroom Remodeling</h5>
                  <p className="card-text">Factory, Industry</p>
                  <Link to="/" className="btn btn-warning">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesScreen;
