import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { productList, ruleList, piceList } from "./Data";

console.log(productList);

function App() {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <div className="navbar-brand">The Product Monitor</div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className=" col">name</div>
          <div className=" col">url</div>
          <div className=" col">rule index</div>
          <div className=" col">status</div>
          <div className=" col">in stock</div>
        </div>
        {productList.map((item, index) => (
          <div key={index} className="row">
            <div className=" col">{item.name}</div>
            <div className=" col">{item.url}</div>
            <div className=" col">{item.ruleIndex}</div>
            <div className=" col">{item.status}</div>
            <div className=" col">{item.inStock}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
