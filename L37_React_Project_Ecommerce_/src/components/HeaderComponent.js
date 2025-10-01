import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [ loginBtn, setLoginBtn] = useState("Login")
  return (
    <div id="header-container">
      <div className="site-identity">
        <h1>
          <a href="#">ECommerce</a>
        </h1>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <a href="#" onClick={()=>{
              {loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")}
            }}>{loginBtn}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderComponent;
