import axios from "axios";
import { useEffect, useState } from "react";
import "./Womens.css";
const Kids = () => {
  const [kids, setkids] = useState([]);
  useEffect(() => {
    axios
      .get("https://fl33vn.sse.codesandbox.io/Kids")
      .then((res) => {
        console.log(res.data);
        setkids(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = kids.map((value, index) => {
    return (
      <>
        <div className="card" style={{ width: "25rem", marginTop: "40px" }}>
          <img
            src={value.image}
            className="card-img-top"
            alt="NO Image Preview"
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <h6 className="card-title">{value.price}</h6>
            <p clas className="card-text">
              {value.shortdescr}
            </p>
            <p clas className="card-text">
              {value.styledetails}
            </p>
            <a href="#" cla className="btn btn-primary">
              BUY NOW
            </a>
          </div>
        </div>
      </>
    );
  });

  return (
    <div>
      <div style={{ marginLeft: "180px" }}>
        <img
          style={{ width: "85%", height: "500px" }}
          src="https://img.mytheresa.com/media/static/raw/cms/l/KW_HP_2022_June/Kids_Homepage_KidsSS2_A_Desktop_2x_20220602102257.jpg?imwidth=1180&imdensity=1"
        />
      </div>
      <div className="container my-3">
        <div className="row">{arr}</div>
      </div>
    </div>
  );
};
export default Kids;
