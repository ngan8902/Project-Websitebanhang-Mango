import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebookMessenger} from "react-icons/fa";
import Message from "message/message";
import storeRedux from "../../store";

import { Button } from "reactstrap";

import Login from "views/Login";

function FixedPlugin(props) {
  const [classes, setClasses] = React.useState("dropdown");
  const [login, setShowlogin] = React.useState(false);
  const [shopData, setShopData] = React.useState(storeRedux.getState()?.shopData)
  const navigate = useNavigate();

  const handleClicksignout = () => {
    navigate("/admin/login");
  }

  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };

  
  return (
    <div>
      {
        (login) ? <Login></Login>
          : <div className="fixed">
            <div className="fixed-plugin">
              <div className={classes}>
                <div onClick={handleClick}>
                  <i className="fa fa-cog fa-2x" />
                </div>
                <ul className="dropdown-menu show">
                  <li className="header-title">{ shopData.shopname }</li>
                  <li className="button-container">
                    <Button
                      href=""
                      color="primary"
                      block
                      className="btn-round"
                    >
                      Thông tin
                    </Button>
                  </li>
                  <li className="button-container">
                    <Button
                      href="https://github.com/ngan8902/Project-Websitebanhang-.git"
                      color="default"
                      block
                      className="btn-round"
                      outline
                    >
                      <i className="nc-icon nc-paper" /> Documentation
                    </Button>
                  </li>
                  <li className="button-container">
                    <Button
                      color="danger"
                      block
                      className="btn-round"
                      onClick={handleClicksignout}
                    >
                      Đăng Suất
                    </Button>
                  </li>
                </ul>
              </div>
              
              <div className="icon-mess">
                <FaFacebookMessenger ></FaFacebookMessenger>
                <span className="badges" style={{ color: "red" }}></span>
              </div>
              </div>
            </div>

      }
    </div>

  );
}

export default FixedPlugin;
