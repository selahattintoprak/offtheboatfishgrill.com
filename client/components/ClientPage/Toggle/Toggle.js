import toggleScss from "./toggle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

export default ({ onTap }) => (
  <>
    <div>
      <a className="btn btn-primary btn-action" on="tap:app-sidebar.toggle">
        {/* <i className="icon icon-menu"></i> */}
        <FontAwesomeIcon icon={faHamburger} />
      </a>
    </div>
    <style jsx global>
      {toggleScss}
    </style>
  </>
);
