import toggleScss from "./toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default () => (
  <>
    <div>
      <a className="btn btn-primary btn-action" href="#app-sidebar">
        {/* <i className="icon icon-menu"></i> */}
        <FontAwesomeIcon icon={faBars} />
      </a>
    </div>
    <style jsx global>
      {toggleScss}
    </style>
  </>
);
