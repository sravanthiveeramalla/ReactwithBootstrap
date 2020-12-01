import * as React from "react";
import Products from "../products/products.js";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./style.css";
function Home() {
  return (
    <div className="home-section">
      <h1 className="head-h1">Products</h1>
      <div className="block-section">
        <Products
          linkurl="../products?value=vegetables"
          name="Vegetables"
          banner="../images/Vegetables.jpg"
        />
        <Products
          linkurl="../products?value=fruits"
          name="Fruits"
          banner="../images/fruits.jpg"
        />
        <Products
          linkurl="../products?value=dairy"
          name="Dairy products"
          banner="../images/dairy.jpg"
        />
        <Products
          linkurl="../products?value=idlidosa"
          name="Idli&nbsp;Dosa batter"
          banner="../images/idlidosa.jpg"
        />
        <Products
          linkurl="../products?value=cookies"
          name="Cookies"
          banner="../images/Cookies.jpg"
        />
        <Products
          linkurl="../products?value=groceries"
          name="Groceries"
          banner="../images/groceries.jpg"
        />
      </div>
      <AwesomeSlider className="carosuel-slider">
        <div data-src="../images/milk.jpg" />
        <div data-src="../images/apples.jpg" />
        <div data-src="../images/bag.jpg" />
      </AwesomeSlider>
    </div>
  );
}
export default Home;
