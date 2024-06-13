const Detailes = () => {
  return (
    <div>
      <div className="details_user d-flex mt-5">
        <span>
          <img src="./user.png" alt="" />
        </span>
        <span>
          <h3>Name Surname</h3>
        </span>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="options d-flex">
        <div className="opt d-flex">
          <span>
            <p>Chat Settings</p>
          </span>
          <span>
            <img src="./down.png" alt="down" />
          </span>
        </div>
        <div className="opt d-flex">
          <span>
            <p>Privecy & help</p>
          </span>
          <span>
            <img src="./down.png" alt="down" />
          </span>
        </div>

        <div className="opt d-flex">
          <span>
            <p>Shear phots</p>
          </span>
          <span>
            <img src="./down.png" alt="down" />
          </span>
        </div>
        <div className="images d-flex mb-5">
          <div className="d-flex sub-img">
            <span>
              <img src="nature.jpg" alt="" />
            </span>
            <p>ima.2155487.jpg</p>
            <div className="d_icons">
              <img src="./download.png" alt="download" />
            </div>
          </div>
          <div className="d-flex sub-img">
            <span>
              <img src="nature.jpg" alt="" />
            </span>
            <p>ima.2155487.jpg</p>
            <div className="d_icons">
              <img src="./download.png" alt="download" />
            </div>
          </div>
          <div className="d-flex sub-img">
            <span>
              <img src="nature.jpg" alt="" />
            </span>
            <p>ima.2155487.jpg</p>
            <div className="d_icons">
              <img src="./download.png" alt="download" />
            </div>
          </div>
        </div>
        <button className="btn btn-danger">Block Contact</button>
      </div>
    </div>
  );
};

export default Detailes;
