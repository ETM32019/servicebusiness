import { Link } from "react-router-dom";
const PricingScreen = () => {
  return (
    <>
      {/* Big Banner */}
      <section className="bg-dark text-white">
        <div className="container text-center py-5 ">
          <h1 className="text-uppercase">Pricing</h1>
        </div>
      </section>
      {/* Services Section */}
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <div class="card-header">
                  <h5>Basic Plan</h5>
                </div>
                <div className="card-body">
                  <h1 className="card-title">
                    $80 <small className="text-muted">/ hr</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Lorem ipsum dolor</li>
                    <li>30 Nulla bibendum</li>
                    <li>Lorem %100 convallis</li>
                    <li>100 consectetur adipiscing</li>
                    <li>sollicitudin</li>
                    <li>ante varius</li>
                  </ul>
                  <Link to="/" className="btn btn-warning btn-block">
                    Get Start
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <div class="card-header">
                  <h5>Pro Plan</h5>
                </div>
                <div className="card-body">
                  <h1 className="card-title">
                    $120 <small className="text-muted">/ hr</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Lorem ipsum dolor</li>
                    <li>30 Nulla bibendum</li>
                    <li>Lorem %100 convallis</li>
                    <li>100 consectetur adipiscing</li>
                    <li>sollicitudin</li>
                    <li>ante varius</li>
                    <li>100 consectetur adipiscing</li>
                    <li>sollicitudin</li>
                    <li>ante varius</li>
                  </ul>
                  <Link to="/" className="btn btn-warning btn-block">
                    Get Start
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div class="card-header">
                  <h5>Business Plan</h5>
                </div>
                <div className="card-body">
                  <h1 className="card-title">
                    $160 <small className="text-muted">/ hr</small>
                  </h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Lorem ipsum dolor</li>
                    <li>30 Nulla bibendum</li>
                    <li>Lorem %100 convallis</li>
                    <li>100 consectetur adipiscing</li>
                    <li>sollicitudin</li>
                    <li>ante varius</li>
                    <li>Lorem ipsum dolor</li>
                    <li>30 Nulla bibendum</li>
                    <li>Lorem %100 convallis</li>
                  </ul>
                  <Link to="/" className="btn btn-warning btn-block">
                    Get Start
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

export default PricingScreen;
