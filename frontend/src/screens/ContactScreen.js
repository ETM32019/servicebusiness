const ContactScreen = () => {
  return (
    <>
      {/* Big Banner Section */}
      <section className="bg-dark text-white">
        <div className="container text-center py-5 ">
          <h1 className="text-uppercase">
            Contact <span className="text-warning">Us</span>
          </h1>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="card rounded-1 border-1">
            <div className="card-body p-4 p-lg-5">
              <div className="row py-5">
                <div className="col-lg-5">
                  <h2>
                    Request a<span className="text-warning"> Call </span>Back
                  </h2>
                  <p className="mb-5 txt-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla bibendum nunc non felis sollicitudin, ut convallis
                    ante varius.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <h5 className="text-muted">Address</h5>
                      <p className="text-muted">123 Activision Dr, Utah</p>
                    </li>
                    <li>
                      <h5 className="text-muted">Email</h5>
                      <p className="text-muted">callofdutygamer@test.com</p>
                    </li>
                    <li>
                      <h5 className="text-muted">Phone</h5>
                      <p className="text-muted">801-555-5555</p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-7">
                  <form>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          aria-label="Firstname"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          aria-label="Lastname"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone number"
                          aria-label="Phonenumber"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject"
                          aria-label="Subject"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email Address"
                          aria-label="Emailaddress"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          className="form-control"
                          placeholder="Leave a Message..."
                          aria-label="With textarea"
                          rows={5}
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12">
                        <button className="btn btn-outline-warning px-5">Submit Now</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactScreen;
