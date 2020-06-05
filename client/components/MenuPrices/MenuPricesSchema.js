import * as jsonReplacer from "../../lib/safeJsonLdReplacer";
const hasChildren = ({ children }) => children && children.length;

export const HasMenu = ({ menus = null, children }) => {
  //.log("menu", menus);
  let newmenu = JSON.stringify(menus, jsonReplacer.getSchema(menus));
  let newMenuParsed = JSON.parse(newmenu);
  const menu = filterMenu("Menu", newMenuParsed);
  const menuSection = filterMenu("MenuSection", newMenuParsed);
  return (
    <>
      {menu.map((menu) => (
        <>
          {menu.hasMenuSection && <MenuTree menus={menu}></MenuTree>}
          {menu.hasMenuItem && <MenuPrices menuPrices={setMenuPrices(menu)} />}
        </>
      ))}
    </>
  );
};
const filterMenu = (type, menu) => {
  return Array.isArray(menu) ? menu.filter(({ "@type": menuType }) => menuType == type) : [];
};
const menuSection = () => {};
const MenuTree = ({ menus, menus: { hasMenuSection, hasMenuItem } }) => {
  return (
    <>
      {Array.isArray(menus) ? (
        <>
          {menus.map((menu) => (
            <MenuPrices menuPrices={setMenuPrices(menu)}>
              {menu.hasMenuSection && <MenuTree menus={menu.hasMenuSection} />}
            </MenuPrices>
          ))}
        </>
      ) : (
        <MenuPrices menuPrices={setMenuPrices(menus)}>
          {hasMenuSection && <MenuTree menus={hasMenuSection} />}
        </MenuPrices>
      )}
    </>
  );
};
const SetTree = ({ menus }) => (
  <>
    {menus.hasMenuSection && <SetTree menus={menus.hasMenuSection}></SetTree>}
    {menus.hasMenuItem && <MenuPrices menuPrices={setMenuPrices(menus)} />}
  </>
);
const getPrice = (offers) => {
  const price = Array.isArray(offers)
    ? offers.map(({ price, eligibleQuantity }) => {
        const { name: qName } = eligibleQuantity || {};
        //console.log("eligibleQuantity", eligibleQuantity);
        return {
          price,
          eligibleQuantity: qName,
        };
      })
    : [
        {
          price: offers["price"],
          eligibleQuantity: offers["eligibleQuantity"] && offers["eligibleQuantity"]["name"],
        },
      ];
  return price;
};
const getAddon = (menuAddon) => {
  const addon =
    Array.isArray(menuAddon) &&
    menuAddon.map(({ name, description, offers }) => {
      const price = getPrice(offers);
      return {
        title: name,
        description,
        price,
      };
    });
  return addon;
};
const setMenuPrices = (menu) => {
  const { "@type": type, name, description, hasMenuItem = [], hasMenuSection = [], menuAddon = [] } = menu;
  console.log(hasMenuItem);
  const items = hasMenuItem.map(({ name, description, offers, menuAddon }) => {
    const price = getPrice(offers);
    const addon = getAddon(menuAddon);
    return {
      title: name,
      description,
      price,
      menuAddon: addon,
    };
  });
  const addon = getAddon(menuAddon);
  //console.log("items", items);
  return [
    {
      title: name,
      description,
      menuAddon: addon,
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
              {menuAddon.map(({ title, description, price }) => (
                <p>
                  {title}-{description}-{price}
                </p>
              ))}
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
