import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default ({ id, menuPrices }) => (
  <>
    <amp-accordion id={id} className="amp-accordion-container" disable-session-states="" animate="">
      {menuPrices.map(({ title, description, items, footer, link }, index) => (
        <section className="amp-accordion" key={id + index}>
          <h2 className="amp-accordion-header" style={{ fontSize: "1rem", padding: "0.3rem" }}>
            {title}
            {/* <i className="icon icon-arrow-right"></i> */}
            <FontAwesomeIcon className="amp-accordion-icon" icon={faChevronDown} />
          </h2>
          <div className="amp-accordion-body my-2">
            <div className="container">
              {description}
              {items.map(({ title, description, price }, index) => (
                <div className="columns" style={{ alignItems: "center" }} key={"col" + index}>
                  <div className="column col-9">
                    <strong>{title}</strong> <br></br>
                    <span style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{description}</span>
                  </div>
                  <div className="column col-3 text-center">
                    <strong>{price}</strong>
                  </div>
                </div>
              ))}
              {footer}
            </div>
          </div>
        </section>
      ))}
    </amp-accordion>
    <style jsx global>
      {`
        .amp-accordion {
          margin-bottom: 6px;
        }
        .amp-accordion-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background-color: white;
          outline: none;
          color: #b75b0a;
        }
        .amp-accordion .amp-accordion-header .amp-accordion-icon {
          float: right;
          transition: transform 0.25s;
        }
        .amp-accordion[expanded] .amp-accordion-header .amp-accordion-icon {
          transform: rotate(-180deg);
        }
      `}
    </style>
  </>
);
