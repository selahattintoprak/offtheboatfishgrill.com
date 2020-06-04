const hasChildren = ({ children }) => children && children.length;

export const HasMenu = ({ menu = null, children }) => {
  console.log("menu", menu);
  return Array.isArray(menu) ? (
    <>
      {menu
        .filter(({ "@type": type }) => type == "Menu")
        .map(({ "@type": type, name, description, hasMenuItem = [], hasMenuSection = [] }, key) => {
          let menuSection = getSchema(hasMenuSection, menu);
          console.log("hasMenuSection", hasMenuSection);
          return <p key={key}> {JSON.stringify(menuSection)}</p>;
        })}
    </>
  ) : null;
};
const getSchema = (section, source) => {
  let schema;
  console.log("section, source", section, source);
  if (Array.isArray(section) && section.length > 0) {
    schema = section.map(({ "@id": sectionId, "@type": sectionType }) => {
      return (
        sectionId && !sectionType && source.find(({ "@id": sourceId, "@type": sourceType }) => sourceId == sectionId)
      );
    });
    console.log("isArray schema", schema);
  } else {
    const { "@id": sectionId, "@type": sectionType } = section;
    if (sectionId && !sectionType) {
      schema = source.find(({ "@id": sourceId }) => sourceId == sectionId);
      console.log("object schema by id", schema);
    } else {
      schema = section;
      console.log("object schema", schema);
    }
  }
  return schema;
};

const setMenuPrices = (hasMenuItem) => {
  console.log(hasMenuItem);
  const items = hasMenuItem.map(({ name, description, offers, menuAddon }) => {
    const price = Array.isArray(offers)
      ? offers.map(({ price, eligibleQuantity: { name: qName } = { name: "" } } = {}) => ({
          price,
          eligibleQuantity: qName,
        }))
      : [
          {
            price: offers["price"],
            eligibleQuantity: offers["eligibleQuantity"] && offers["eligibleQuantity"]["name"],
          },
        ];

    return {
      title: name,
      description,
      price,
    };
  });
  const menuAddon = menuAddon.map();
  //console.log("items", items);
  return [
    {
      title: name,
      description,
      menuAddon,
      items,
      footer: "",
    },
  ];
};
const MenuPrices = ({ id, menuPrices, children }) => (
  <>
    <amp-accordion id={id} className="amp-accordion-container" disable-session-states="" animate="">
      {menuPrices.map(({ title, description, menuAddon, items, footer, link }, index) => (
        <section className="amp-accordion" key={id + index}>
          <h2 className="amp-accordion-header" style={{ fontSize: "1rem", padding: "0.3rem" }}>
            {title}
            <i className="icon icon-arrow-right"></i>
          </h2>
          <div className="amp-accordion-body my-2">
            <div className="container">
              {description}
              {menuAddon}
              {children}
              {items.map(({ title, description, price }, index) => (
                <div className="columns" style={{ alignItems: "center" }} key={"col" + index}>
                  <div className="column col-9">
                    <strong>{title}</strong> <br></br>
                    <span style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{description}</span>
                  </div>
                  <div className="column col-3 text-center">
                    <div className="columns" style={{ alignItems: "center" }}>
                      {price.map(({ eligibleQuantity, price }, index, array = []) => (
                        <div className={"column text-center col-" + 12 / array.length} key={"price-" + index}>
                          {eligibleQuantity && (
                            <>
                              <strong>{eligibleQuantity}</strong> <br></br>
                            </>
                          )}
                          <span style={{ color: "rgb(94, 94, 94)", fontWeight: "400" }}>{price}</span>
                        </div>
                      ))}
                    </div>
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
        .amp-accordion-body {
        }
        .amp-accordion .amp-accordion-header .icon {
          float: right;
          transform: rotate(90deg);
          transition: transform 0.25s;
        }
        .amp-accordion[expanded] .amp-accordion-header .icon {
          transform: rotate(-90deg);
        }
      `}
    </style>
  </>
);

export default MenuPrices;
