import React from "react";
// import element Alert yang telah dibuat

class TentangSaya extends React.Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-bold text-dark mt-3">Project</h3>

        <div className="row mt-3">
          <div className="col-lg-6 col-sm-12 p-2">
            <div className="card">
              <div className="card-body row">
                {/* menampilkan Gambar / cover */}

                <div className="col-5">
                  <img
                    src="image/jala.jpg"
                    className="img"
                    height="100"
                    width="200"
                  />
                </div>

                {/* menampilkan deskripsi */}

                <div className="col-7">
                  <h5 className="text-info">{this.props.name}</h5>

                  <h6 className="text-danger">Jala Web Design</h6>

                  {/* button untuk mengedit */}

                  <button
                    className="btn btn-sm btn-primary m-1"
                    onClick={this.props.onEdit}
                  >
                    View Study Case
                  </button>

                  {/* button untuk menghapus */}

                  <button
                    className="btn btn-sm btn-danger m-1"
                    onClick={this.props.onDrop}
                  >
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 p-2">
            <div className="card">
              <div className="card-body row">
                {/* menampilkan Gambar / cover */}

                <div className="col-5">
                  <img
                    src="image/jala.jpg"
                    className="img"
                    height="100"
                    width="200"
                  />
                </div>

                {/* menampilkan deskripsi */}

                <div className="col-7">
                  <h5 className="text-info">{this.props.name}</h5>

                  <h6 className="text-danger">Jala Web Design</h6>

                  {/* button untuk mengedit */}

                  <button
                    className="btn btn-sm btn-primary m-1"
                    onClick={this.props.onEdit}
                  >
                    View Study Case
                  </button>

                  {/* button untuk menghapus */}

                  <button
                    className="btn btn-sm btn-danger m-1"
                    onClick={this.props.onDrop}
                  >
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TentangSaya;
