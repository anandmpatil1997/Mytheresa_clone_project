import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navi">
      <div className="navtop">
        <div className="navleft">
          <Link to="/women">
            {" "}
            <p>WOMEN</p>
          </Link>
          <Link to="/men">
            <p>MEN</p>
          </Link>
          <Link to="/kids">
            {" "}
            <p>KIDS</p>
          </Link>
        </div>
        <div className="navright">
          <p>Signup for Newsletter</p>
          <p>My account</p>
          <p>My wishlist</p>
          <p>Ghana | English</p>
        </div>
      </div>
      <div className="logo">
        <div></div>
        <img
          className="logoimg"
          alt="NO image"
          src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220614T171237"
        />
        <p>
          SHOPPING BAG{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="17"
            fill="currentColor"
            class="bi bi-bag"
            viewBox="0 0 16 16"
          >
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
        </p>
      </div>
      <div className="menutop">
        <div className="menus">
          <p>NEW ARRIVALS</p>
          <p>DESIGNER</p>
          <p>CLOTHING</p>
          <p>SHOES</p>
          <p>BAGS</p>
          <p>ACCESORIES</p>
          <p>NEW SEASON</p>
          <div>
            <input className="inputs" placeholder="Search for" />
            <button type="button" class="btn btn-light">
              Search
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default Navbar;
