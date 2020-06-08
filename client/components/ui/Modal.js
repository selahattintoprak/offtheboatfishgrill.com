import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCross, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ModalsStyles } from "../../ui-styles/styles";

export default ({ className, id, title, body, footer }) => (
  <>
    <div className={"modal " + className} id={id}>
      <a href="#close" className="modal-overlay" aria-label="Close"></a>
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-title h5">{title}</div>
          <a href="#close" className="btn btn-clear" aria-label="Close">
            {/* <i className="icon icon-cross"></i> */}
            <FontAwesomeIcon icon={faTimes} />
          </a>
        </div>
        <div className="modal-body">
          <div className="content">{body}</div>
        </div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
    <ModalsStyles />
    <style jsx global>
      {`
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}
    </style>
  </>
);
