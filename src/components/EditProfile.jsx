import netflixProfile from '../assets/netflixPrpfile.webp'

const EditProfile = () => {
    return (
      <header>
        <div className="container profile w-50 w-md-25 mx-auto mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="border-bottom text-center text-white">
                Edit Profile
              </h1>
            </div>
  
            {/* Avatar, Epicoder e Language */}
            <div className="col-12 mt-3 d-flex align-items-start">
              <div className='me-3'>
                <img
                  className="img-fluid me-3"
                  src={netflixProfile}
                  alt="Profile Avatar"
                  style={{ width: "90px", height: "100px" }}
                />
              </div>
              <div className="flex-grow-1">
                <div>
                  <input
                    className="form-control text-light bg-secondary border-0 text-center text-white mb-3"
                    type="text"
                    defaultValue="Epicoder1"
                  />
                </div>
                <div>
                  <p className="text-white mb-1">Language:</p>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle btn-sm"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      English
                    </button>
                    <ul className="dropdown-menu w-100">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Italian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Spanish
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-12 mt-3">
              <p className="text-white">Maturity Setting:</p>
              <p className="text-center bg-secondary py-2 text-white">
                ALL MATURITY SETTINGS
              </p>
            </div>
  
            <div className="col-12 border-bottom mt-3">
              <p className="text-white">
                Show files for all maturity settings for this profile.
              </p>
              <button
                className="border mb-3 bg-black text-secondary w-25 btn-sm"
                style={{ height: "40px" }}
              >
                EDIT
              </button>
            </div>
  
            <div className="col-12 mt-3">
              <p className="text-white">Autoplay Controls:</p>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="autoplay1"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="autoplay1"
                >
                  Autoplay next episode in a series on all devices
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="autoplay2"
                />
                <label
                  className="form-check-label text-white"
                  htmlFor="autoplay2"
                >
                  Autoplay previews while browsing on all devices
                </label>
              </div>
            </div>
  
            {/* Pulsanti inferiori allineati orizzontalmente */}
            <div className="col-12 border-top mt-4 pt-3">
              <div className="d-flex justify-content-between gap-2">
                <button className="btn btn-sm border bg-white text-black">
                  SAVE
                </button>
                <button className="btn btn-sm border bg-black text-secondary">
                  CANCEL
                </button>
                <button className="btn btn-sm border bg-black text-secondary">
                  DELETE PROFILE
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default EditProfile;
  