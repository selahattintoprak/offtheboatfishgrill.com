import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
//import Addon from "./Addon";
import Offers from "./Offers";

const MenuItem = ({ menuItem, children }) => {
  const { name, description, offers, menuAddon } = menuItem;

  return (
    <>
      {children && <div className="col-12">{children}</div>}
      {menuAddon && (
        <div className="col-12">
          <amp-accordion
            className="amp-accordion-container"
            disable-session-states=""
            animate=""
          >
            <section className="amp-accordion">
              <h2
                className="amp-accordion-header"
                style={{ fontSize: "1rem", padding: "0.3rem" }}
              >
                Choices
                {/* <i className="icon icon-arrow-right"></i> */}
                <FontAwesomeIcon
                  className="amp-accordion-icon"
                  icon={faChevronDown}
                />
              </h2>
              <div>{/* <Addon menuAddon={menuAddon} /> */}</div>
            </section>
          </amp-accordion>
        </div>
      )}
      <div
        className="columns centerFlex"
        style={{ alignItems: "center" }}
        key={"item-" + name}
      >
        <div className="column col-8">
          <div>
            {name && (
              <div>
                <strong>{name}</strong>
              </div>
            )}
            {description && (
              <div style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>
                {description}
              </div>
            )}
          </div>
        </div>
        <div className="column col-4 text-center">
          <div className="columns" style={{ alignItems: "center" }}>
            {offers && <Offers offers={offers} />}
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .centerFlex {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};
export default MenuItem;
