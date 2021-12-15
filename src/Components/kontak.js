import React from "react";
// import element Alert yang telah dibuat

class Kontak extends React.Component {
  render() {
    return (
      <div>
        <h2>ini Kontak</h2>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
          </div>
          <div>
            <input type="text" />
          </div>
        </form>

        <form action="">
          <div>
            <label htmlFor="">Email</label>
          </div>
          <div>
            <input type="email" />
          </div>
        </form>

        <form action="">
          <div>
            <div>
              <label htmlFor="">Message</label>
            </div>
          </div>
          <div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </div>
    );
  }
}
export default Kontak;
