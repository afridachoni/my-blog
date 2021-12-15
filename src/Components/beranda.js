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

              <div className="col-6">
                <h5 className="col-lg-6 col-sm-12">
                  Hi, i’m Afrida Choni Kurnia Sari
                </h5>
                <b>
                  <h1 className="col-lg-6 col-sm-12">UI/UX Designer</h1>
                </b>
                <h10 className="col-lg-6 col-sm-12 ">
                  I'm Afrida Choni Kurnia Sari. I'm 19 years old and i was born
                  in Malang, 10th April 2002. I have started learn about design
                  when i was in Vocational High School. There i began to find
                  out how the design was made, then i continued to learn how to
                  make creative and innovative designs. I am able work
                  individually or within a team. now I am looking forward to
                  collaborate with you!
                </h10>
                <div>
                  <a href="/" className="btn bg-dark text-white col-lg-3 mt-4">
                    Hire Me
                  </a>
                  <div class="mt-3">
                    <img src="image/wa.jpeg" class="mx-1" width="35px"></img>
                    <img src="image/tw.jpeg" class="mx-1" width="35px"></img>
                    <img src="image/ig.jpeg" class="mx-1" width="35px"></img>
                    <img src="image/git1.jpeg" class="mx-1" width="35px"></img>
                    <img src="image/fb.jpeg" class="mx-1" width="35px"></img>
                  </div>
                </div>
              </div>
              <div className="col-6">
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
