import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Offers from "./Offers";
import MenuItem from "./MenuItem";
import { MenuPrices } from "./MenuPricesSchema";

const AddonList = ({ addon }) => {
  return (
    <>
      {addon ? (
        Array.isArray(addon) ? (
          addon.map((addon, index) => <span>{addon.name}</span>)
        ) : (
          <span>{addon.name}</span>
        )
      ) : null}
    </>
  );
};

const Addon = ({ menuAddon, children }) => {
  console.log("menuAddon", menuAddon);
  const { name, description, menuAddon: addon } = menuAddon;
  return (
    <>
      <div className="menuAddon p-2">
        {menuAddon ? (
          Array.isArray(menuAddon) ? (
            menuAddon.map(({ name, description, offers, menuAddon: addon }, index) => {
              return (
                <div key={index}>
                  {menuAddon && (
                    <>
                      {addon ? (
                        <amp-accordion
                          className="amp-accordion-container"
                          disable-session-states=""
                          animate=""
                          key={index}
                        >
                          <section className="amp-accordion">
                            <h2 className="amp-accordion-header" style={{ fontSize: "1rem", padding: "0.3rem" }}>
                              {name}
                              {/* <i className="icon icon-arrow-right"></i> */}
                              <FontAwesomeIcon className="amp-accordion-icon" icon={faChevronDown} />
                            </h2>
                            <div className="amp-accordion-body my-2">
                              <div className="container">
                                {description && <div className="mb-2 my-2">{description}</div>}
                                {children}

                                {addon && <Addon menuAddon={addon} />}
                              </div>
                            </div>
                          </section>
                        </amp-accordion>
                      ) : (
                        <div className="columns centerFlex" style={{ alignItems: "center" }} key={"item-" + name}>
                          <div className="column col-8">
                            <div>
                              {name && (
                                <div>
                                  <strong>{name}</strong>
                                </div>
                              )}
                              {description && (
                                <div style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{description}</div>
                              )}
                              {addon && <Addon menuAddon={addon} />}
                            </div>
                          </div>
                          <div className="column col-4 text-center">
                            <div className="columns" style={{ alignItems: "center" }}>
                              {offers && <Offers offers={offers} />}
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              );
            })
          ) : (
            <div>
              {name}
              {description}
              {addon && <div>{addon && <Addon menuAddon={addon} />}</div>}
            </div>
          )
        ) : null}
      </div>
    </>
  );
};
export default Addon;
