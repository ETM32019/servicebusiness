const TestimonialCards = () => {
  // name1, name2
  // desc1, desc2
  // date1, date2
  return (
    <div className="row">
      <div className="col-lg-6">
        <div class="card">
          <div class="card-header">
            <img
              src="http://placehold.it/50x50"
              alt="..."
              class="img-thumbnail"
            />
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div class="card">
          <div class="card-header">
            <img
              src="http://placehold.it/50x50"
              alt="..."
              class="img-thumbnail"
            />
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
