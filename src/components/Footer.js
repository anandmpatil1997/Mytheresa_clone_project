import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div id="footer">
        <div>
          <p class="p1">SERVICE & SECURITY</p>
          <p>
            <span id="tick" class="material-icons-outlined">
              done
            </span>
            Fast Delivery
          </p>
          <p class="p2">Delivery within 2 bussiness days</p>
          <p>
            <span class="material-icons-outlined">done</span>Free Return within
            30days
          </p>
          <p class="p2">Convenient return service</p>
          <p>
            <span class="material-icons-outlined">done</span>Secure payment &
            data protection
          </p>
          <p class="p2">
            SSL encrytion for secure transation and personal data{" "}
          </p>
        </div>
        <div>
          <p class="p1">MYTHERESA</p>
          <p class="p2">About Us</p>
          <p class="p2">Trust & Services</p>
          <p class="p2">Press</p>
          <p class="p2">Career</p>
          <p class="p2">Investers relation</p>
          <p class="p2">Affiliates</p>
        </div>
        <div>
          <p class="p1">CUSTUMER SERVICE</p>
          <p class="p2">Contact us</p>
          <p class="p2">Shipping information</p>
          <p class="p2">Secures Payment</p>
          <p class="p2">Exchanges</p>
          <p class="p2">Return</p>
          <p class="p2">After sale service</p>
          <p class="p2">Gift card</p>
        </div>
        <div>
          <p class="p1">GET TREND UPDATES, STYLE TIPS & MORE</p>
          <div ID="signup">
            <input type="text" placeholder="enter your email" />
            <button>SIGNUP</button>
          </div>
          <div id="follow">
            <p class="p2">Follow us on</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPduxdgbL00ONsV1TVGp_-35wACnge4sUvdw&usqp=CAU"
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default Footer;
