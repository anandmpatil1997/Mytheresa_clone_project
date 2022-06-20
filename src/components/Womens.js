import axios from "axios";
import { useEffect, useState } from "react";
import "./Womens.css";
const Womens = () => {
  const [women, setwomen] = useState([]);
  useEffect(() => {
    axios
      .get("https://tfyyw4.sse.codesandbox.io/Womens")
      .then((res) => {
        console.log(res.data);
        setwomen(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const arr = women.map((value, index) => {
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
      <div className="womenfirst">
        <img
          className="womenimg"
          src="https://img.mytheresa.com/media/static/raw/cms/l/WW_HP_2022_CW24/BIG_EN/Valentino_Act_Big_Desktop_1_x2_20220613155108.jpg?imwidth=1180&imdensity=1"
        />
      </div>
      <div className="container my-3" style={{ gap: "20px" }}>
        <div className="row">{arr}</div>
      </div>
    </div>
  );
};
export default Womens;
