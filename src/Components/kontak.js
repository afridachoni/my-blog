import React from "react";
// import element Alert yang telah dibuat

class Kontak extends React.Component {
  render() {
    return (
      // <div>
      //   <h2>ini Kontak</h2>
      //   <form action="">
      //     <div>
      //       <label htmlFor="">Name</label>
      //     </div>
      //     <div>
      //       <input type="text" />
      //     </div>
      //   </form>

      //   <form action="">
      //     <div>
      //       <label htmlFor="">Email</label>
      //     </div>
      //     <div>
      //       <input type="email" />
      //     </div>
      //   </form>

      //   <form action="">
      //     <div>
      //       <div>
      //         <label htmlFor="">Message</label>
      //       </div>
      //     </div>
      //     <div>
      //       <textarea name="" id="" cols="30" rows="10"></textarea>
      //     </div>
      //   </form>
      // </div>
      <div>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row gy-4 mt-5">
              <h1>Contact</h1>
              <form>
                <div class="form-group">
                  <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="form-group my-3">
                  <label for="exampleFormControlSelect1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleFormControlInput1"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Kontak;
