
const EditProfile = () => {
    return (
      <header>
        <div className="container profile w-50 w-md-25 mx-auto mt-4">
          <div className="row">
            <div className="col-12">
              <h1 className="border-bottom text-center">Edit Profile</h1>
            </div>
  
            <div className="col-12 text-center">
              <img
                className="img-fluid my-3"
                src="assets/img/avatar.png"
                alt="Profile Avatar"
              />
            </div>
  
            <div className="col-12">
              <input
                className="form-control text-light bg-secondary border-0 text-center"
                type="text"
                defaultValue="Epicoder1"
              />
            </div>
  
            <div className="col-12 mt-3">
              <p>Language:</p>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
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
  
            <div className="col-12 mt-3">
              <p>Maturity Setting:</p>
              <p className="text-center bg-secondary py-2">
                ALL MATURITY SETTINGS
              </p>
            </div>
  
            <div className="col-12 border-bottom mt-3">
              <p>Show files for all maturity settings for this profile.</p>
              <button className="border mb-3 bg-black text-secondary w-100">
                EDIT
              </button>
            </div>
  
            <div className="col-12 mt-3">
              <p>Autoplay Controls:</p>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="autoplay1"
                />
                <label className="form-check-label" htmlFor="autoplay1">
                  Autoplay next episode in a series on all devices
                </label>
              </div>
              <div className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="autoplay2"
                />
                <label className="form-check-label" htmlFor="autoplay2">
                  Autoplay previews while browsing on all devices
                </label>
              </div>
            </div>
  
            <div className="col-12 border-top mt-4 pt-3">
              <button className="border my-3 bg-black text-secondary w-100">
                SAVE
              </button>
              <button className="border mb-3 bg-black text-secondary w-100">
                CANCEL
              </button>
              <button className="border mb-3 bg-black text-secondary w-100">
                DELETE PROFILE
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default EditProfile;