import * as React from "react";
import "./style.css";
function Products(props) {
  return (
    <div className="block-div">
      <div className="block-img-div">
        <a href={props.linkurl}>
          <img className="block-image" src={props.banner} />
        </a>
      </div>
      <div className="block-text">
        <label>{props.name}</label>
      </div>
    </div>
  );
}
export default Products;
