import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import toggleScss from "./toggle.scss";

export default ({ onTap }) => (
  <>
    <div>
      <a className="btn btn-primary btn-action" on="tap:app-sidebar.toggle">
        {/* <i className="icon icon-menu"></i> */}
        <FontAwesomeIcon icon={faBars} />
      </a>
    </div>
    <style jsx global>
      {toggleScss}
    </style>
  </>
);
