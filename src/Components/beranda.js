import React from "react";
// import element Alert yang telah dibuat

class Beranda extends React.Component {
  render() {
    return (
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row gy-4">
              <hr />
              <div className="col-lg-12 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h5 className="col-lg-6 col-sm-12 p-2">
                  Hi, i’m Afrida Choni Kurnia Sari
                </h5>
                <b>
                  <h1 className="col-lg-6 col-sm-12 p-2">UI/UX Designer</h1>
                </b>
                <h10 className="col-lg-6 col-sm-12 p-2">
                  I'm Afrida Choni Kurnia Sari. I'm 19 years old and i was born
                  in Malang, 10th April 2002. I have started learn about design
                  when i was in Vocational High School. There i began to find
                  out how the design was made, then i continued to learn how to
                  make creative and innovative designs. I am able work
                  individually or within a team. now I am looking forward to
                  collaborate with you!
                </h10>
                <div>
                  <a href="/" className="btn bg-dark text-white col-lg-1">
                    Hire Me
                  </a>
                </div>
                <div>
                  <img src="image/img.jpeg" width="300px"></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Beranda;
