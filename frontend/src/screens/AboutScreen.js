const AboutScreen = () => {
  return (
    <>
      {/* Big Banner Section */}
      <section className="bg-dark text-white">
        <div className="container text-center py-5 ">
          <h1 className="text-uppercase">Meet the <span className="text-warning">Team</span></h1>
        </div>
      </section>
      {/* Meet The Team Section */}
      <section className="bg-light">
        <div className="container py-5">
          <header className="text-center mb-5">
            <div className="row">
              <div className="col-lg-7 mx-auto">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  bibendum nunc non felis sollicitudin, ut convallis ante
                  varius.
                </p>
              </div>
            </div>
          </header>
          <div className="row text-center">
            <div className="col-lg-4 mb-4 mb-lg-5">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">John Doe</h5>
                  <p className="text-muted">CEO</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum nunc non felis sollicitudin, ut convallis ante varius.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-5">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Jane Doe</h5>
                  <p className="text-muted">Co-Founder</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum nunc non felis sollicitudin, ut convallis ante varius.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-5">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Shane Doe</h5>
                  <p className="text-muted">Project Manager</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum nunc non felis sollicitudin, ut convallis ante varius.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-5">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Molly Doe</h5>
                  <p className="text-muted">UX / UI Developer</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum nunc non felis sollicitudin, ut convallis ante varius.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-5">
              <div className="card">
                <img
                  src="http://placehold.it/700x400"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Steve Doe</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum nunc non felis sollicitudin, ut convallis ante varius.
                  </p>
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
                  <h5 className="card-title">Karen Doe</h5>
                  <p className="text-muted">Web Developer</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum nunc non felis sollicitudin, ut convallis ante varius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutScreen;
