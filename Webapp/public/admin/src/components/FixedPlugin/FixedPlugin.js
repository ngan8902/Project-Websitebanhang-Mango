import React from "react";

import { Button } from "reactstrap";

function FixedPlugin(props) {
  const [classes, setClasses] = React.useState("dropdown");
  const handleClick = () => {
    if (classes === "dropdown") {
      setClasses("dropdown show");
    } else {
      setClasses("dropdown");
    }
  };
  return (
    <div className="fixed-plugin">
      <div className={classes}>
        <div onClick={handleClick}>
          <i className="fa fa-cog fa-2x" />
        </div>
        <ul className="dropdown-menu show">
          <li className="header-title">SETTING</li>           
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
              href=""
              color="danger"
              block
              className="btn-round"
              target="_blank"
            >
              Đăng Suất
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FixedPlugin;
