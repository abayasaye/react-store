import { Component } from "react";
import Pic from "./Prodact-img";
import ProdactName from "./Title";
class Department extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h1>Product</h1>
        <h1>
          <ProdactName Text="astrnout in the space" />
        </h1>
        <Pic src="astro.png" />
      </div>
    );
  }
}
export default Department;
